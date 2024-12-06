import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '@/views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home2',
      component: HomeView,
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
      path: '/home1',
      name: 'home1',
      component: Home
    }
  ],
})

export default router
