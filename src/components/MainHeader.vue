<script setup>
import { ref } from 'vue'
import router from '@/router'
import MainUserLogin from '@/components/MainUserLogin.vue'
import { useUser } from '@/stores/modules/user.js'

const UserStore = useUser()
const activeIndex = ref('1')
const input = ref('')

const logoutFn = () => {
  UserStore.isLogin = false
  localStorage.clear()
  router.push('/home')
}
</script>
<template>
  <!-- 导航栏 -->
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0" @click="router.push('/home')">
      <img
        style="width: 120px; height: max-content; margin: 0 auto"
        src="/src/assets/img/logo.webp"
        alt="Element logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="5" id="header-input">
      <el-input v-model="input" placeholder="搜你所想" clearable />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item>
      <el-button class="creationCenter" @click="router.push('/create')"> 创作中心 </el-button>
    </el-menu-item>
    <el-menu-item
      index="6"
      @click="UserStore.loginPopupVisible = true"
      v-if="UserStore.isLogin !== true"
    >
      登录
    </el-menu-item>
    <el-menu-item index="7">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="UserStore.userImg" alt="Element logo" style="width: 120px; height: auto" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="router.push({ path: '/user' })"> 个人中心 </el-dropdown-item>
            <el-dropdown-item @click="logoutFn">退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
  <!-- 登录弹出框 -->
  <el-dialog width="500" style="height: max-content" center v-model="UserStore.loginPopupVisible">
    <MainUserLogin> </MainUserLogin>
    <div class="flex flex-col text-center">
      <p>没有账号？<el-button @click="router.push('/register')" class="h-1">注册</el-button></p>
    </div>
  </el-dialog>
</template>
<style scoped>
.el-menu-demo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  border-top: 2px solid var(--el-color-primary);
  --el-menu-horizontal-height: 60px;
  margin: auto auto;
  padding: 0;
  .creationCenter {
    --el-button-bg-color: purple;
    --el-button-text-color: white;
    --el-button-hover-bg-color: purple;
    --el-button-hover-text-color: white;
  }
  #header-input {
    border-bottom: none;
    flex: 1.2;
  }
  .flex-grow {
    flex: 0.2;
  }
}
</style>
