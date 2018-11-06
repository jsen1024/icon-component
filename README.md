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
##关于打包后找不到svg图，是因为没有修改 
```
	-config
		-index.js
	下的：
		assetsPublicPath: './',
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
