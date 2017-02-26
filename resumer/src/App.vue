<template>
  <div id="app">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'
import store from './store/index'
export default {
  name: 'app',
  store,
  components: {Topbar, ResumeEditor, ResumePreview},
  created(){
    // 与innerHTML类似，可以在指定的地方插入HTML内容
    // 第一个参数有四个选项"beforeBegin" "afterEnd" "afterBegin" "beforeEnd"分别指在elem的开始标签之前、结束标签之后、开始标签之后、结束标签之前插入htmlStr
    document.body.insertAdjacentHTML('afterbegin', icons)
  }
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  background: #EAEBEC;
  display: flex;
  flex-direction: column;
  min-width: 1024px;
  >main {
    flex-grow: 1;
    min-width: 1024px;
    max-width: 1440px;
    display: flex !important;
    justify-content: space-between;
    padding: 0 16px;
    margin: 16px 0;
    width: 100%;
    align-self: center;    
  }
}
</style>
