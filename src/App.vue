<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import MainFooter from './components/MainFooter'

export default {
  components: {
    MainFooter,
    Navbar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: 8rem;
  margin-right: 8rem;
}
</style>
