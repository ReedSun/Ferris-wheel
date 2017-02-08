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

<style>
#app {
  height: 100vh;
  background: #ccc;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
  min-width: 1024px;
  max-height: 1440px;
  justify-content: space-around;
  display: flex !important;
}
</style>
