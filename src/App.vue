<template>
  <div id="app">
    <MainNav></MainNav>
    <hr class="featurette-divider">

<!--Basically a render body equivalent for Vue-->
    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
import MainNav from './components/Layout/MainNav.vue'
import Footer from './components/Layout/Footer.vue'

export default {
  name: 'App',

  components: {
    MainNav,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
