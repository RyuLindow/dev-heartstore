import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/main.scss'
import jQuery from 'jquery'
import 'bootstrap'
import 'popper.js'
import axios from 'axios'


//Global GET header for Axios - both are necessary to get the data
axios.defaults.headers.get['umb-project-alias'] = 'dev-heartstore'
axios.defaults.headers.get['Accept-Language'] = 'en-US'




window.axios = require('axios');

window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
//Write the HTTP calls here





  router,
  render: h => h(App)
}).$mount("#app");




