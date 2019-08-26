const {danger, fail, message, warn} = require('danger');

// Fail if a new file is added to a root directory
//danger.git.created_files.forEach(filePath => {
//                                 if (!filePath.includes('/')) {
//                                 fail(`Failed because a new file is being added in the root directory: ${filePath}`);
//                                 }})


danger.git.created_files.forEach(filePath => {
                                 if (!filePath.includes('/')) {
                                 fail(`Failed because a new file is being added in the root directory: ${filePath}`);
                                 }})

const rootDirectoryFiles = danger.git.created_files.filter(filePath => !filePath.includes('/'))
if (rootDirectoryFiles.length > 0) {
    fail(`Failed because these new files are being added in the root directory: ${rootDirectoryFiles.join(", ")}`);
}
