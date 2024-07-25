import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore(
  'useUser',
  () => {
    const isLogin = ref(typeof localStorage.getItem('token') === 'string' || false)
    const loginPopupVisible = ref(false)
    const token = ref(localStorage.getItem('token') || '')
    const userId = ref('')
    const userImg = ref('/src/assets/img/logo.webp')
    const userName = ref('')
    return { isLogin, token, userId, userImg, loginPopupVisible, userName }
  },
  {
    persist: false
  }
)
