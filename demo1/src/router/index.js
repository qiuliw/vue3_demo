import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import { compile } from "vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home',
        },{
            path:'/home',
            component:Home
        },{
            path:'/about',
            component:About
        }
    ]
})
export default router;