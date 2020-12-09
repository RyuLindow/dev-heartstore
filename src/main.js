import Vue from 'vue'
import App from './App.vue'
import './assets/main.scss'
import 'bootstrap'
import 'popper.js'
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

//Vue.compontent('MainNav', require('./components/MainNav.vue').default);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')