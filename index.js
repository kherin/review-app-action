const core = require("@actions/core");
const github = require("@actions/github");

try {
  // inputs
  const token = core.getInput("token");
  const annotationTitle = core.getInput("annotation-title");
  const annotationUrl = core.getInput("annotation-url");

  // pull request details
  const payload = JSON.stringify(github.context.payload, undefined, 2);

  console.log("payload: ", payload);

  const pull_request = payload["pull_request"];
  const repository = payload["repository"];
  const pull_number = payload["number"];

  console.log("--> pull_request, ", pull_request);
  const pull_name = pull_request["head"]["ref"];
  const repo_pathname = repository["full_name"];
  const repo_owner = repository["owner"];
  const repo_name = repository["name"];
  const owner_name = repo_owner["login"];

  // build annotation text
  const pull_request_path = `${repo_pathname}/tree/${pull_name}`;
  const annotation_body = `${annotationUrl}${pull_request_path}`;

  const octokit = github.getOctokit(token);

  octokit.pulls.createReviewComment({
    owner_name,
    repo_name,
    pull_number,
    annotation_body,
  });

  console.log(`Annotation - ${annotationTitle} has been successful.`);
} catch (error) {
  core.setFailed(error.message);
}
