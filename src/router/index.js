import { createRouter, createWebHistory } from 'vue-router'
import HeaderBar from '@/components/HeaderBar.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HeaderBar,
      name: 'header'
    }
  ]
})

export default router
