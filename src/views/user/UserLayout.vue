<script lang="ts" setup>
//导入
import { useUser } from '@/stores/modules/user'
import { Bell, ChromeFilled, CoffeeCup } from '@element-plus/icons-vue'
import router from '@/router'


const UserStore = useUser()
</script>
<template>
  <div class="user-layout-container">

    <!--------------------------------------提示登录框开始------------------------------------- -->
    <div v-if="UserStore.isLogin !== true" class="alert-container">
      <div role="alert" class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>您尚未登录，请登录后查看此页</span>
      </div>
    </div>
    <!--------------------------------------提示登录框结尾------------------------------------- -->

    <div v-else>
      <div class="common-layout">
        <el-container>
          <el-aside width="200px" class="left-aside">
            <p class="mt-0 text-4xl text-green-500 text-left mb-2.5">个人中心</p>
            <el-row class="tac">
              <el-col :span="24">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                  <el-menu-item index="1" @click="router.push('/accountSetting')">
                    <el-icon>
                      <Bell />
                    </el-icon>
                    <span>账号设置</span>
                  </el-menu-item>
                  <el-menu-item index="2" @click="router.push('/personalData')">
                    <el-icon>
                      <CoffeeCup />
                    </el-icon>
                    <span>个人资料</span>
                  </el-menu-item>
                  <el-menu-item index="3" @click="router.push('/notificationMessage')">
                    <el-icon>
                      <ChromeFilled />
                    </el-icon>
                    <span>通知私信</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user-layout-container {
  height: 100vh;
}

.common-layout {
  margin: 0 auto;
  padding: 10px;
}

.alert-container {
  padding: 10px;
}
</style>
