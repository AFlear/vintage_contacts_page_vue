import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import * as VueGoogleMaps from "vue2-google-maps";


import App from "./App.vue";
import Map from './components/map'

// eslint-disable-next-line
import "./assets/style/theme.scss";
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.component("Map", Map);
export const serverBus = new Vue();

new Vue({
  Map,
  render: h => h(App)
}).$mount("#app");
