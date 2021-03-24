const core = require('@actions/core');
const github = require('@actions/github');

try {

    const annotationTitle = core.getInput('annotation-title');
    const annotationUrl = core.getInput('annotation-url');

    console.log('annotationTitle: ', annotationTitle);
    console.log('annotationUrl: ', annotationUrl);

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload is ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}