<script setup>
//功能导入
import { ref } from 'vue'
import { useUser } from '@/stores/index'
import router from '@/router'

//组件导入
import MainUserLogin from '@/components/Main/MainUserLogin.vue'

//状态管理
const UserStore = useUser()
const input = ref('')
const activeIndex = ref('1')
const loginPopupVisible = ref(false)
const imgSrc = ref(UserStore.userImg)

//函数声明
const logoutFn = () => {
  UserStore.$reset()
  UserStore.isLogin = false
  localStorage.clear()
  router.push('/home')
  location.reload()
}
const handleClosePop = () => {
  loginPopupVisible.value = false
  imgSrc.value = UserStore.userImg
}
const handleSearch = () => {
  router.push({
    path: '/search',
    query: {
      keyword: input.value
    }
  })

}
</script>
<template>
  <!-- -----------------------------导航栏开始---------------------------- -->

  <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false">

    <el-menu-item class="logo" index="0" @click="router.push('/home')">

      <img src="/src/assets/img/logo.webp" alt="Element logo" />

    </el-menu-item>

    <div class="flex-grow-1" />

    <el-menu-item class="search" index="1">

      <el-input @keyup.enter="handleSearch" v-model="input" placeholder="搜你所想" clearable />

    </el-menu-item>

    <div class="flex-grow-1" />

    <el-menu-item class="creationCenter" index="2">
      <el-button @click="router.push('/create')"> 创作中心 </el-button>
    </el-menu-item>

    <el-menu-item index="3" v-if="UserStore.isLogin !== true" @click="loginPopupVisible = true">
      登录
    </el-menu-item>

    <div class="flex-grow-2" />
    <el-menu-item index="4" v-if="UserStore.isLogin === true">

      <el-dropdown trigger="click">

        <span class="el-dropdown-link">

          <img :src="imgSrc" alt="Element logo" />

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

  <!-- -----------------------------导航栏结束---------------------------- -->

  <!--------------------------------登录弹出框开始------------------------------->

  <el-dialog width="500" align-center v-model="loginPopupVisible">
    <MainUserLogin @close-popup="handleClosePop"> </MainUserLogin>
  </el-dialog>

  <!--------------------------------登录弹出框开始------------------------------->

</template>
<style scoped>
.el-menu {

  .logo {
    width: 200px;

    img {
      width: 200px;
      object-fit: cover;
    }
  }

  .flex-grow-1 {
    flex: 0.5;
  }

  .flex-grow-2 {
    flex: 0.1;
  }

  --el-menu-bg-color: var(--main-color-bg);
  --el-menu-hover-bg-color: var(--main-color-hover-bg);
  --el-menu-text-color: var(--main-color-text);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  --el-menu-horizontal-height: 60px;

  z-index: 9999;
  border-top: 2px solid var(--el-color-primary);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .search {
    border-bottom: none;
    flex: 1.2;
  }

  .creationCenter button {
    --el-button-bg-color: var(--main-color-base);
    --el-button-text-color: var(--main-color-normal);
    --el-button-hover-bg-color: var(--main-color-base);
    --el-button-hover-text-color: var(--main-color-normal);
  }

  .el-dropdown-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1vw;
    border: 1px solid var(--el-color-primary);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
