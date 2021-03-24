# Review App Action

This action annotates the description section of a newly-created pull request when it is created for the firs time.

### Type: JavaScript Action

## Inputs
### `annotation-title`
The title of the link as it will appear on the PR's description section

### `annotation-url`
The URL of the review app which is linked to the code branch of the newly-created pull request

## Example usage

uses: actions/review-app-action@v1
    with:
        annotation-title: 'demo app'
        annotation-url: 'https://location-of-demo-app.com'

