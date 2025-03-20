import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Basics from "../views/Basics.vue";
import Roles from "../views/Roles.vue";
import Classes from "../views/Classes.vue";
import Crafting from "../views/Crafting.vue";
import Mental from "../views/Mental.vue";
import Modes from "../views/Modes.vue";
import Summoners from "../views/Summoners.vue";
import Utils from "../views/Utils.vue";

const routes = [
	{
		path: "/",
		component: HomePage,
		meta: { title: "Home" },
	},
	{
		path: "/about",
		component: About,
		meta: { title: "Su di me" },
	},
	{
		path: "/basics",
		component: Basics,
		meta: { title: "Basi" },
	},
	{
		path: "/roles",
		component: Roles,
		meta: { title: "Ruoli" },
	},
	{
		path: "/classes",
		component: Classes,
		meta: { title: "Classi" },
	},
	{
		path: "/crafting",
		component: Crafting,
		meta: { title: "Crafting" },
	},
	{
		path: "/mental",
		component: Mental,
		meta: { title: "Mentalità" },
	},
	{
		path: "/modes",
		component: Modes,
		meta: { title: "Modalità" },
	},
	{
		path: "/summoners",
		component: Summoners,
		meta: { title: "Incantesimi" },
	},
	{
		path: "/utils",
		component: Utils,
		meta: { title: "Siti utili" },
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
