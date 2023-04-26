import { createRouter,createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue"
// import Home from "@/views/Home.vue"
import HLM from "@/views/HLM.vue"
import XYJ from '@/views/XYJ.vue'
import SHZ from '@/views/SHZ.vue'
import SGYY from '@/views/SGYY.vue'
const routes=[
    {path:'/',redirect:'/Home'},
    {path:'/Home',component:Home},
    {path:'/HLM',component:HLM},
    {path:'/XYJ',component:XYJ},
    {path:'/SHZ',component:SHZ},
    {path:'/SGYY',component:SGYY},

];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})
export default router;