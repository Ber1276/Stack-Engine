import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore(
  'useUser',
  () => {
    const isLogin = ref(false)
    const loginPopupVisible = ref(false)
    const token = ref('')
    const userId = ref('')
    const userImg = ref('/src/assets/img/logo.webp')
    return { isLogin, token, userId, userImg, loginPopupVisible }
  },
  {
    persist: false
  }
)
