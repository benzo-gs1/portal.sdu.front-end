import Vue from "vue";
import App from "./components/App.vue";
import VueCookies from "vue-cookies";
import router from "./router";
import store from "./store";
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(FlagIcon)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
