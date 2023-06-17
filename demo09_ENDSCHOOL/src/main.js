import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router/index" // 引入router
import './assets/fonts/font-awesome.min.css'
createApp(App)
.use(createPinia)
.use(router)
.mount('#app')
