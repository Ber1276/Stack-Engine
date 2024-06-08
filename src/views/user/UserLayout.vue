<script lang="ts" setup>
import { ref } from 'vue'
import { useUser } from '@/stores/modules/user'
import { Bell, ChromeFilled, CoffeeCup } from '@element-plus/icons-vue'
import router from '@/router'
const UserStore = useUser()

import { provide } from 'vue'
import VChart, { THEME_KEY } from 'vue-echarts'
provide(THEME_KEY, 'dark')
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer])

const option = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
})
</script>
<template>
  <div class="user-layout-container">
    <div v-if="UserStore.isLogin !== true" class="alert-container">
      <div role="alert" class="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>您尚未登录，请登录后查看此页</span>
      </div>
      <div id="test-chart">
        <v-chart class="chart" :option="option" autoresize />
      </div>
    </div>
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
  min-height: 100vh;
}
.common-layout {
  margin: 0 auto;
  padding: calc(var(--el-menu-horizontal-height) + 20px) 5% 0 5%;
}
.alert-container {
  padding: calc(var(--el-menu-horizontal-height) + 20px) 5% 0 5%;
}
.chart {
  height: 100px;
  width: 100%;
}
</style>
