import { createRouter, createWebHistory } from 'vue-router'
//components引入
import MainHome from '@/views/layout/MainHome.vue'
import MainLayout from '@/views/layout/MainLayout.vue'
import UserLayout from '@/views/user/UserLayout.vue'
import accountSetting from '@/views/user/modules/accountSetting.vue'
import notificationMessage from '@/views/user/modules/notificationMessage.vue'
import personalData from '@/views/user/modules/personalData.vue'
import creationCenter from '@/views/create/creationCenter.vue'
import registerLayout from '@/views/layout/RegisterLayout.vue'
import { ElMessage } from 'element-plus'

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
              path: '/personalData',
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
router.beforeEach(async (to) => {
  if (to.path === '/create' && !localStorage.getItem('token')) {
    ElMessage({ type: 'warning', message: '请先登录' })
    return false
  }
})

export default router
