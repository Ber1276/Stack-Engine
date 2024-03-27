import { createRouter, createWebHistory } from 'vue-router'
//components引入
import MainLearn from '@/views/MainLearn.vue'
import MainHome from '@/views/MainHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/learn',
      component: MainLearn,
      name: 'MainLearn'
    },
    {
      path: '/home',
      component: MainHome,
      name: 'MainHome'
    }
  ]
})

export default router
