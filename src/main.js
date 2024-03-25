import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
//使用components.js管理
import components from './utils/components'

//声明
const app = createApp(App)
app.use(components)
app.use(createPinia())
app.use(router)
//挂载
app.mount('#app')
