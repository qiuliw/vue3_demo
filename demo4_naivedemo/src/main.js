import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index" // 引入router
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
