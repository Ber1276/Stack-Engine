import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/styles/main.css'
import './assets/styles/tailwindcss.css'
import './assets/styles/element/index.css' //样式

import router from './router/index' //路由
import pinia from './stores/index' //状态
//声明
const app = createApp(App)

//挂载
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
