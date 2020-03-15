import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function load(componentName) {
	return () => import(`@/components/${componentName}`);
}

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Main UI",
			component: load("MainUI")
		},
		{
			path: "/about",
			name: "About APP",
			component: load("AboutApp")
		}
	]
});

export default router;
