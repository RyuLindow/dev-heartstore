import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/main.scss'
import jQuery from 'jquery'
import 'bootstrap'
import 'popper.js'


window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
