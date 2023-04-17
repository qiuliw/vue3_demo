import { createRouter,createWebHistory } from "vue-router";
import Naiveui from "@/components/Naiveui.vue"
const routes=[
    {path:'/',redirect:'/Naiveui',},
    {path:'/Naiveui',component:Naiveui}

];

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;