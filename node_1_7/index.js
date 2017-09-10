var fs = require('fs');
var sourceDirectory = './';
var target = 'directory_content.txt';

fs.readdir(sourceDirectory, function(err, data) {
    if (err) throw err;
    fs.writeFile(target, data, function(err) {
        if (err) throw err;
        console.log('Saved', sourceDirectory, 'content to', target);
    });
});
