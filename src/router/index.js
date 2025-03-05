import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Basics from "../views/Basics.vue";
import Roles from "../views/Roles.vue";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/about", component: About },
	{ path: "/basics", component: Basics },
	{ path: "/roles", component: Roles },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
