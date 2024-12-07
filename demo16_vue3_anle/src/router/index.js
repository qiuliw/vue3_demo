import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
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
    }
  ],
})

export default router
