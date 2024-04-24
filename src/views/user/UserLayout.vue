<script lang="ts" setup>
import { useUser } from '@/stores/modules/user'
import { Bell, ChromeFilled, CoffeeCup, MagicStick } from '@element-plus/icons-vue'
const UserStore = useUser()

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

provide(THEME_KEY, 'dark')

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
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
                  <el-menu-item index="1">
                    <el-icon>
                      <Bell />
                    </el-icon>
                    <span>账号设置</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <el-icon>
                      <CoffeeCup />
                    </el-icon>
                    <span>个人资料</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <el-icon>
                      <ChromeFilled />
                    </el-icon>
                    <span>通知私信</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <el-icon>
                      <MagicStick />
                    </el-icon>
                    <span>人工智能</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>
<style scoped>
.common-layout {
  margin: 0 auto;
  padding: calc(var(--el-menu-horizontal-height) + 20px) 5% 0 5%;
}
.alert-container {
  padding: calc(var(--el-menu-horizontal-height) + 20px) 5% 0 5%;
}
.chart {
  height: 600px;
  width: 600px;
}
</style>
