// import { defineComponent } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue'
export default {
  install(app) {
    app.component('HeaderBar', HeaderBar)
  }
}
