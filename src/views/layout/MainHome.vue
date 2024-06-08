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
      <el-aside class="right-aside">
        <el-card class="right-card">
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
.common-layout {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  .el-container {
    padding: 10px 10px 0 10px;
    margin: 0 auto;
    width: 100%;
    .el-main {
      padding: 0 10px 0 0;
      max-width: 900px;
    }
    .right-aside {
      width: 300px;
      .right-card {
        width: 100%;
      }
    }
  }
}
</style>
