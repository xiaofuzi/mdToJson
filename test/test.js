var mdToJson = require('../src/index.js'),
    path = require('path');

let {
    parsedFiles
} = mdToJson();

var res = parsedFiles(path.join(__dirname, './_posts'));
console.log(res.total);
console.log(res.data[0].meta);
console.log(res.data[0].summary);
console.log(res.data[0].content);
