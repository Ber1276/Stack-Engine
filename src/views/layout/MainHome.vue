<script setup>
import instance from '@/utils/request'
import { onMounted, ref } from 'vue'
import MainList from '@/components/MainList.vue'
import HomeCarousel from '@/components/HomeCarousel.vue'
import MainFooter from '@/components/MainFooter.vue'

const list = ref([])
const isLoading = ref(true)
const props = ref({ list, isLoading })
const getList = async () => {
  const res = await instance.get('https://tenapi.cn/v2/baiduhot')
  list.value = res.data.data
  isLoading.value = false
}
onMounted(getList)
</script>
<template>
  <div class="common-layout">
    <el-container class="el-container">
      <el-main class="el-main">
        <HomeCarousel></HomeCarousel>
        <MainList v-model="props"></MainList>
      </el-main>
      <el-aside width="200px" class="right-aside">
        <el-card class="right-card" style="max-width: 280px">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
            </div>
          </template>
          <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
          <template #footer>Footer content</template>
        </el-card>
      </el-aside>
    </el-container>

    <MainFooter></MainFooter>
  </div>
</template>

<style scoped>
.el-container {
  margin: 0 auto;
  padding: calc(var(--el-menu-horizontal-height) + 20px) 0 0 0;
  width: 100%;
  .el-main {
    --el-main-padding: 0 !important;
    padding: 0 5px 0 5px;
  }
}
</style>
