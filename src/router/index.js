import { createRouter, createWebHistory } from 'vue-router'
//components引入
import MainLearn from '@/views/layout/MainLearn.vue'
import MainHome from '@/views/layout/MainHome.vue'
import MainLayout from '@/views/layout/MainLayout.vue'
import UserLayout from '@/views/user/UserLayout.vue'
import accountSetting from '@/views/user/modules/accountSetting.vue'
import notificationMessage from '@/views/user/modules/notificationMessage.vue'
import personalData from '@/views/user/modules/personalData.vue'
import creationCenter from '@/views/create/creationCenter.vue'
import registerLayout from '@/views/layout/RegisterLayout.vue'

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
        },
        {
          path: '/user',
          component: UserLayout,
          redirect: '/accountSetting',
          children: [
            {
              path: '/accountSetting',
              component: accountSetting
            },
            {
              path: '/notificationMessage',
              component: notificationMessage
            },
            {
              path: 'personalData',
              component: personalData
            }
          ]
        }
      ]
    },
    {
      path: '/create',
      component: creationCenter
    },
    {
      path: '/register',
      component: registerLayout
    }
  ]
})

export default router
