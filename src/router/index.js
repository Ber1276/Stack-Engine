import { createRouter, createWebHistory } from 'vue-router'
//components引入
import MainAsider from '@/views/MainAsider.vue'
import MainLearn from '@/views/MainLearn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainAsider,
      name: 'MainAsider'
    },
    {
      path: '/learn',
      component: MainLearn,
      name: 'MainLearn'
    }
  ]
})

export default router
