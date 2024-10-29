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
const imgSrc = ref('/src/assets/img/user_icon.webp')

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
  <div class="el-menu-clear">
    <menu :default-active="activeIndex" class="el-menu" mode="horizontal" :ellipsis="false">

      <div class="logo" index="0" @click="router.push('/home')">

        <img src="/src/assets/img/logo.webp" alt="Element logo" />

      </div>

      <div class="flex-grow-1" />

      <div class="search" index="1">

        <el-input @keyup.enter="handleSearch" v-model="input" placeholder="搜你所想" clearable />

      </div>

      <div class="flex-grow-1" />

      <div class="creationCenter" index="2">
        <el-button @click="router.push('/create')"> 创作中心 </el-button>
      </div>

      <div index="3" v-if="UserStore.isLogin !== true" class="loginHeaderButton">
        <el-button @click="loginPopupVisible = true">登录</el-button>
      </div>


      <div index="4" v-if="UserStore.isLogin === true" style="margin-left: 1vw;margin-right: 1vw;">

        <el-dropdown trigger="click" class="headerDropdown">

          <span class="el-dropdown-link">

            <img :src="imgSrc" alt="Element logo" />

          </span>

          <template #dropdown>
            <menu
              style="width: 5vw;height: 4vw;display: flex;flex-direction: column;justify-content: center;align-items: center;gap: 1vh;font-size: 14px;font-weight: 600;">

              <div style="cursor: pointer;" @click="router.push({ path: '/user' })"> 个人中心 </div>
              <div style="cursor: pointer;" @click="logoutFn">退出账号</div>

            </menu>
          </template>

        </el-dropdown>

      </div>

    </menu>
  </div>


  <!-- -----------------------------导航栏结束---------------------------- -->

  <!--------------------------------登录弹出框开始------------------------------->

  <el-dialog width="500" align-center v-model="loginPopupVisible">
    <MainUserLogin @close-popup="handleClosePop"> </MainUserLogin>
  </el-dialog>

  <!--------------------------------登录弹出框开始------------------------------->

</template>
<style scoped>
.el-menu-clear {
  width: 100vw;
  height: 8vh;
}

.el-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 8vh;

  z-index: 9999;


  .logo {
    width: 13vw;
    margin-left: 1vw;

    img {
      width: 13vw;
      object-fit: cover;
    }
  }

  .flex-grow-1 {
    flex: 0.5;
  }

  .flex-grow-2 {
    flex: 0.1;
  }

  .loginHeaderButton {
    margin-left: 2vw;
    margin-right: 2vw;

    button {
      --el-button-bg-color: black;
      --el-button-text-color: white;
      --el-button-hover-bg-color: black;
      --el-button-hover-text-color: white;
    }
  }

  .search {
    border-bottom: none;
    flex: 1.2;
  }


  .creationCenter button {
    --el-button-bg-color: black;
    --el-button-text-color: white;
    --el-button-hover-bg-color: black;
    --el-button-hover-text-color: white;
  }


  .headerDropdown {

    .el-dropdown-link {
      width: 3vw;
      height: 3vw;
      border-radius: 50%;
      margin-right: 1vw;
      border: 1px solid black;



      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }

}


.el-menu::after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>
