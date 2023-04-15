import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/Home.vue';
import Message from '../components/Message.vue'
import Rain from '../components/Rain.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home,
        },{
            path:'/Message',
            component:Message
        },
        {
            path:'/Rain',
            component:Rain
        }
    ]
})
export default router;
