<script setup>
import { useRoute } from "vue-router"; // importa useRoute
import { watch, onMounted } from "vue"; // importa watch e onMounted
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

// useRoute per ottenere l'accesso alla route corrente
const route = useRoute();

// Funzione per aggiornare il titolo della pagina
const updateTitle = () => {
	const title = route.meta.title;
	if (title) {
		document.title = title; // Aggiorna il titolo
	}
};

//watch per monitorare i cambiamenti della route
watch(() => route.path, updateTitle, { immediate: true });

onMounted(updateTitle);
</script>

<template>
	<!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->

	<!-- <Header />
  <HelloWorld msg="Vite + Vue" /> -->
	<router-view />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
