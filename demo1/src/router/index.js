import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Message from '../components/Message.vue'
const routes=[
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component:Home,
        children:[
            {path:'message',component:Message}
        ]
    },
    {
        path:'/about',
        //路由守卫
        beforeEnter:(to,from,next)=>{
            if(true){
                next();//通行
            }else{
                next('/login')//跳转到其他路由
            }
        },
        component:() => import('../views/About.vue')},
    {path:'/login',component:()=>import('../views/Login.vue')}
    

];

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;