<script setup>
import { onMounted, ref } from 'vue'
import HomeCarousel from '@/components/Main/HomeCarousel.vue'
import MainFooter from '@/components/Main/MainFooter.vue'
import { GetArticleList } from '@/api/public.js'

const list = ref([])
const isLoading = ref(true)
const props = ref({ list, isLoading })
const getList = async () => {
  try {
    const res = await GetArticleList(1, 2, localStorage.getItem('token'))
    list.value = res.data.records
    console.log(res.data.records)
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}
onMounted(getList)
</script>
<template>
  <div class="common-layout">
    <el-container class="el-container">
      <el-main class="el-main">
        <HomeCarousel></HomeCarousel>
        <ul v-loading="props.isLoading" class="infinite-list min-h-16" style="overflow: auto">
          <el-card>
            <template #header>
              <div class="card-header">
                <el-button>推荐</el-button>
              </div>
            </template>
            <li v-for="item in props.list" :key="item.id" class="infinite-list-item">
              <a class="flex justify-between w-full">
                <span class="list-item-reading">{{ item.reading }}读过</span>
                <div>
                  <p class="list-item-title">{{ item.title }}</p>
                  <p class="list-item-summary">{{ item.summary }}</p>
                </div>
                <span class="list-item-author">作者：{{ item.author }}</span>
              </a>
            </li>
          </el-card>
        </ul>
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
      max-width: 1000px;
    }

    .right-aside {
      width: 300px;

      .right-card {
        width: 100%;
      }
    }
  }
}

.infinite-list {
  min-height: 500px;
  height: max-content;
  padding: 0;
  margin: 10px 0 0 0;
  list-style: none;
  width: 100%;
}

.infinite-list .infinite-list-item {
  a {
    padding: 10px;
    height: 88px;

    .list-item-reading {
      line-height: 68px;
      width: 80px;
    }

    .list-item-author {
      line-height: 68px;
      width: 200px;
    }

    div {
      width: 600px;
      position: relative;

      .list-item-title {
        font-size: 36px;
        position: absolute;
        top: 0;
        margin-top: -10px;
      }

      .list-item-summary {
        font-size: 12px;
        position: absolute;
        bottom: 0;
      }
    }
  }
}
</style>
