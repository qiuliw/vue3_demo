import { createApp } from 'vue'
import './assets/reset.css'
import App from './App.vue'
import router from "./router/index" // 引入router
import { Tab,Tabs } from 'vant' //引入vant
import 'vant/lib/index.css'
createApp(App)
.use(router)
.use(Tab).use(Tabs)
.mount('#app')
