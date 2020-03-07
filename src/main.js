import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

alert(process.env.VUE_APP_HI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
