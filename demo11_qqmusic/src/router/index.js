import { createRouter,createWebHistory } from "vue-router";
import indexMain from "../components/indexMain.vue"
const routes=[
    {
        path:'/',
        name:'indexMain',
        component: indexMain
    },

];

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;