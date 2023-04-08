import { createApp, inject } from 'vue';
import App from './App.vue';
import Router from './router/index.js';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
    
app.config.errorHandler = (err) => {
    console.log(err);
}

app.use(Router).use(pinia).mount('#app'); /// id in index.html
Router.app = app;
//console.log("main.js", Router.app)
export default app
