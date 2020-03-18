import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "@/components/router/router";
import { store } from "@/store/store";
import vuetify from "./plugins/vuetify";
import i18n from "@/plugins/i18n";

Vue.config.productionTip = false;

new Vue({
	i18n,
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount("#app");
