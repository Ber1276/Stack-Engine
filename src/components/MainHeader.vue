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
    <el-menu-item index="0" @click="router.push('/home')" id="first-child">
      <img style="width: 140px; height: max-content; margin: 0 auto" src="/src/assets/img/logo.webp"
        alt="Element logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="5" id="header-input">
      <el-input v-model="input" placeholder="搜你所想" clearable />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item>
      <el-button class="creationCenter" @click="router.push('/create')"> 创作中心 </el-button>
    </el-menu-item>
    <el-menu-item index="6" @click="UserStore.loginPopupVisible = true" v-if="UserStore.isLogin !== true">
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
  <el-dialog width="500" align-center v-model="UserStore.loginPopupVisible">
    <MainUserLogin> </MainUserLogin>
    <div class="flex flex-col text-center">
      <p>没有账号？<el-button @click="router.push('/register')" class="h-1">注册</el-button></p>
    </div>
  </el-dialog>
</template>
<style scoped>
.el-menu-demo {
  #first-child {
    width: 200px;
  }

  --el-menu-bg-color: var(--main-color-bg);
  --el-menu-hover-bg-color: var(--main-color-hover-bg);
  --el-menu-text-color: var(--main-color-text);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  border-top: 2px solid var(--el-color-primary);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  --el-menu-horizontal-height: 60px;
  margin: auto auto;
  padding: 0;

  .creationCenter {
    --el-button-bg-color: var(--main-color-base);
    --el-button-text-color: var(--main-color-normal);
    --el-button-hover-bg-color: var(--main-color-base);
    --el-button-hover-text-color: var(--main-color-normal);
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
