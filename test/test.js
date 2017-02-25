var mdToJson = require('../src/index.js'),
    path = require('path');

let {
    parsedFiles,
    parse,
    use
} = mdToJson({
    dirname: path.join(__dirname, './_posts')
});

use((res, next)=>{
    console.log(111);

    next(res);
})
parse((res)=>{
    console.log(222);
})

var res = parsedFiles(path.join(__dirname, './_posts'));
console.log(res.total);
console.log(res.data[0].meta);
console.log(res.data[0].summary);
console.log(res.data[0].content);
