import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

const routes=[
    {path:'/',redirect:'/home',},
    {path:'/home',component:Home},
    {path:'/HLM',component:import('../views/HLM.vue')},
    {path:'/SGZ',component:import('../views/SHZ.vue')},
    {path:'/SGYY',component:import('../views/SGYY.vue')},
    {path:'/XYJ',component:import('../views/XYJ.vue')}

];

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;