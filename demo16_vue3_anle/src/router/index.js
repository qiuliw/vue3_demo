import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/LoginView.vue'),
    // },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/buy',
      name: 'buy',
      component:()=> import('../views/Buy.vue'),
    },{
      path: '/login',
      component:()=>import('../views/Login.vue')
    }
  ],
})

export default router
