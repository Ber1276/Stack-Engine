import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore(
  'useUser',
  () => {
    const isLogin = ref(typeof localStorage.getItem('token') === 'string' || false)
    const token = ref(localStorage.getItem('token') || '')
    const userId = ref('')
    const userImg = ref('/src/assets/img/logo.webp')
    const userName = ref('')

    function $reset() {
      isLogin.value = false
      userId.value = ''
      userImg.value = '/src/assets/img/logo.webp'
      userName.value = ''
    }

    return { isLogin, token, userId, userImg, userName, $reset }
  }
)
