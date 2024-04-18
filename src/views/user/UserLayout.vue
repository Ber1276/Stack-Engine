<script lang="ts" setup>
import { useUser } from '@/stores/modules/user'
const UserStore = useUser()
</script>
<template>
  <div>
    <div v-if="UserStore.isLogin !== true">未登录</div>
    <div v-else>个人中心</div>
  </div>
</template>
<style scoped>
#app {
  margin-top: 0;
}
</style>
