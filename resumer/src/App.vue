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
export default {
  name: 'app',
  components: {Topbar, ResumeEditor, ResumePreview}
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
