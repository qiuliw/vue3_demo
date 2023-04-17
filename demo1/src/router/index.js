import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
const routes=[
    {
        path:'/',
    },{
        path:'/home',
        component:Home,
    },{
        path:'/about',
        //路由守卫
        component:() => import('../views/About.vue')
    },{
        path:'/login',
        component:()=>import('../views/Login.vue')
    }
    

];

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;