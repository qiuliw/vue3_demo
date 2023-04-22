// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Naiveui from "@/components/Naiveui.vue"
import Midteam from "@/components/Midterm.vue"
const routes=[
    {path:'/',redirect:'/Midterm',},
    {path:'/Naiveui',component:Naiveui},
    {phth:'/Midterm',component:Midteam}

];

const router = createRouter({
    history:createWebHashHistory(),
    // history:createWebHistory(),
    routes,
})
export default router;