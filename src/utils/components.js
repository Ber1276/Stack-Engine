// import { defineComponent } from 'vue';
import MainHeader from '@/components/MainHeader.vue'
export default {
  install(app) {
    app.component('MainHeader', MainHeader)
  }
}
