# vue中封装一个svg组件
##[教程进入博客](https://www.cnblogs.com/Jiangchuanwei/p/9386792.html)
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#补充
关于打包之后，直接访问dist/index/html文件是无效的，在项目根目录下，创建一个server.js
```
// server.js
var express = require('express')
var app = express()
app.use(express.static('./dist'))
app.listen(9000)

```
##执行node server.js
##浏览器打开localhost:9000

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
