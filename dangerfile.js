const {danger, warn} = require('danger')

// Fail if a new file is added to a root directory
danger.git.created_files.forEach(filePath => {
                                 console.log(filePath)
                                 if (filePath.includes('/')) {
                                 fail(`Failed because a new file is being added in the root directory: ${filePath}`);
                                 }
                                 })


