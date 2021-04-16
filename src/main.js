import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
