## mds-to-json

parse md files to json.

* usage

```bash
npm install
```

* test

```bash
npm run test
```

example:

```js
var mdToJson = require('../src/index.js'),
    path = require('path');

let {
    parsedFiles
} = mdToJson({});

var res = parsedFiles(path.join(__dirname, './_posts'));
console.log(res.total);
console.log(res.data[0].meta);
console.log(res.data[0].summary);
console.log(res.data[0].content);
```

### output

* res
    `type: Object`

```js
var res = {
    total: 10,
    data: [
        {
            meta:{ title: '简单的dom库和轻量级mvvm框架的尝试',
            date: 2016-02-21T19:07:19.000Z,
            tags: [ 'js' ],
            id: '0',
            createTime: '2016-02-22',
            url: '2016-02-22-简单的dom库和轻量级mvvm框架的尝试',
            strTag: 'js' }
        }
    ]
}

### API

* parseFiles | `Function`

    return parsed data by json.
    按 json 格式返回处理后的数据.

* use
    add a plugin

* parse
    * params
        * marked: `Object`  marked options
        * dirname: 'String' the soure dirname

    parse file use plugin

* plugins

examples:

```javascript
var mdToJson = require('mds-to-json')();

mdToJson.use((res, next)=>{
    console.log(res.total);

    next(res);
})

mdToJson.use('printTotal', (res, next)=>{
    console.log(res.total);

    next(res);
})

mdToJson.parse((res)=>{
    console.log(res);
})
```

## who used?

[ssr-web(A fast, simple & powerful blog framework, powered by Node.js and Vue.)](https://github.com/xiaofuzi/ssr-web)


