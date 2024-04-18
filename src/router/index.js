import { createRouter, createWebHistory } from 'vue-router'
//components引入
import MainLearn from '@/views/layout/MainLearn.vue'
import MainHome from '@/views/layout/MainHome.vue'
import MainLayout from '@/views/layout/MainLayout.vue'
import UserLayout from '@/views/user/UserLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
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
    },
    {
      path: '/user',
      component: UserLayout
    }
  ]
})

export default router
