import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/main.scss'
import jQuery from 'jquery'
import 'bootstrap'
import 'popper.js'
import axios from 'axios'


// Global GEt header for Axios
axios.defaults.headers.get['umb-project-alias'] = 'dev-heartstore'
axios.defaults.headers.get['Accept-Language'] = 'en-US'





window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
