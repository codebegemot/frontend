import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css"; // Подключите Tailwind CSS, если требуется

createApp(App).use(router).mount("#app");
