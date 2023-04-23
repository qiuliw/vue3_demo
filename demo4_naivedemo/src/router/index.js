// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Cards from "@/components/Cards.vue"
// import Home from "@/views/Home.vue"
import HLM from "@/views/HLM.vue"
import XYJ from '@/views/XYJ.vue'
import SHZ from '@/views/SHZ.vue'
import SGYY from '@/views/SGYY.vue'
const routes=[
    {path:'/',redirect:'/Cards'},
    {path:'/Cards',component:Cards},
    {path:'/HLM',component:HLM},
    {path:'/XYJ',component:XYJ},
    {path:'/SHZ',component:SHZ},
    {path:'/SGYY',component:SGYY},
    // {path:'/Happy',component:import("@/components/Happy.vue")}
    {path:'/NewComponentTest',component:import("@/components/NewComponentTest.vue")}

];

const router = createRouter({
    history:createWebHashHistory(),
    // history:createWebHistory(),
    routes,
})
export default router;