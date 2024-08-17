import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import "./assets/main.css";

const app = createApp(App);

// Crea una instancia de Pinia
const pinia = createPinia();

// Usa Pinia en tu aplicación
app.use(pinia);

app.mount('#app');
