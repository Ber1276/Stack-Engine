import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import './assets/styles/element/index.css' //样式
import './assets/styles/tailwindcss.css'
import router from './router/index' //路由
import pinia from './stores/index' //状态
//声明
const app = createApp(App)

//挂载
app.use(router)
app.use(pinia)
app.mount('#app')
