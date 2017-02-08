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

## 学习过程中遇到的坑
- 在生成预览页面时，没有搞清楚`assetsPublicPath`属性的意义，导致预览页面引用静态资源错误，`assetsPublicPath`的值即为在http中静态文件的引用目录。
- 以`https://reedsun.github.io/Ferris-wheel/resumer/dist/index.html`为例，此时`assetsPublicPath`的值应为`/Ferris-wheel/resumer/dist/`。