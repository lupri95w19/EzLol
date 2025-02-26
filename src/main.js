import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import router from "./router"; //router per gestire la navigazione npm install vue-router@4

const app = createApp(App);
app.use(router);
app.mount("#app");
