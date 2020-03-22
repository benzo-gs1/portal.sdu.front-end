import Vue from "vue";
import App from "./components/App.vue";
import VueCookies from "vue-cookies";
import router from "./router";
import store from "./store";
import { i18n } from "./plugins/i18n";

Vue.config.productionTip = false;

Vue.use(VueCookies);

new Vue({
  i18n,
  router,
  store,
  methods: {
    setLocale(locale) {
      import(`./langs/${locale}.json`).then(msg => {
        this.$i18n.setLocaleMessage(locale, msg);
        this.$i18n.locale = locale;
      });
    }
  },
  render: h => h(App)
}).$mount("#app");
