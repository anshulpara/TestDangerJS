export DANGER_GITHUB_API_TOKEN='a718f019e741232ad2d13c65dbada4c0db98818f'

const {danger, warn} = require('danger')
const {danger, includes} = require('danger')

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
    warn('Please include a description of your PR changes.');
}

// Keep Lockfile up to date
const packageChanged = includes(danger.git.modified_files, 'package.json');
const lockfileChanged = includes(danger.git.modified_files, 'yarn.lock');
if (packageChanged && !lockfileChanged) {
    const message = 'Changes were made to package.json, but not to yarn.lock';
    const idea = 'Perhaps you need to run `yarn install`?';
    warn(`${message} - <i>${idea}</i>`);
}

// Fail if a new file is added to a root directory
var modifiedSpecFiles = danger.git.created_files.filter(function (filePath) {
                                                         warn(`${filePath}`);
                                                         return filePath.match(/-spec.(js|jsx|ts|tsx)$/gi);
                                                         });


