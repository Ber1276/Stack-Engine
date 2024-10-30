import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia().use(persist)
export default pinia
export * from '@/stores/modules/article'
export * from '@/stores/modules/user'
