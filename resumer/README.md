# resumer

> A Vue.js project

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

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 写代码过程中遇到的坑
- 在生成预览页面时，没有搞清楚`assetsPublicPath`属性的意义，导致预览页面引用静态资源错误，`assetsPublicPath`的值即为在http中静态文件的引用目录。
	- 以`https://reedsun.github.io/Ferris-wheel/resumer/dist/index.html`为例，此时`assetsPublicPath`的值应为`/Ferris-wheel/resumer/dist/`。
- 安装node-sass失败，npm 安装 node-sass 依赖时，会从 github.com 上下载 .node 文件。由于国内网络环境的问题，这个下载时间可能会很长，甚至导致超时失败。
这是使用 sass 的同学可能都会遇到的郁闷的问题。解决方案就是使用其他源，或者使用工具下载，然后将安装源指定到本地。
	- 我使用的是淘宝镜像，即如下命令
	
	```
	npm i node-sass -save --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
	```