// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Naiveui from "@/components/Naiveui.vue"
import Midteam from "@/views/Midterm.vue"
import HLM from "@/views/HLM.vue"
const routes=[
    {path:'/',redirect:'/Midterm',},
    {path:'/Naiveui',component:Naiveui},
    {path:'/Midterm',component:Midteam},
    {path:'/HLM',component:HLM}

];

const router = createRouter({
    history:createWebHashHistory(),
    // history:createWebHistory(),
    routes,
})
export default router;