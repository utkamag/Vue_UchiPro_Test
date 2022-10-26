import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import VueCryptojs from "vue-cryptojs/src";

createApp(App).use(store).use(router).use(VueCryptojs).mount('#app')
