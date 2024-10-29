<script setup>
import { onMounted, ref } from 'vue'
import { GetArticleList } from '@/api/public.js'
import { ElMessage } from 'element-plus'
//导入组件
import MainFooter from '@/components/Main/MainFooter.vue'
import HomeCarousel from '@/components/Main/HomeCarousel.vue'

//分页功能
const paginate = ref({
  pagenum: 1,
  pagesize: 15,
  total: 10
})
const handleCurrentChange = () => {
  getList()
}

const handleSizeChange = () => {
  getList()
}

//渲染列表
const list = ref([])
const isLoading = ref(true)
const props = ref({ list, isLoading })
const getList = async () => {
  try {
    const res = await GetArticleList(paginate.value.pagenum, paginate.value.pagesize, localStorage.getItem('token'))
    console.log(res.data.records);
    list.value = res.data.records
    paginate.value.total = res.data.total
    isLoading.value = false
  } catch (err) {
    ElMessage({
      type: 'error',
      message: err
    })
  }
}


//挂载时获取列表
onMounted(getList)
</script>
<template>
  <div class="common-layout">
    <!-- 主体部分-------------------------------------- -->

    <div class="el-container">
      <!-- ---------------------------------文章瀑布流-------------------------------------- -->

      <el-main class="el-main">
        <HomeCarousel></HomeCarousel>

        <ul v-loading="props.isLoading" class="infinite-list" style="overflow: auto">
          <div class="card-header">
            推荐
          </div>
          <el-card>
            <li v-for="item in props.list" :key="item.id" class="infinite-list-item">
              <a @click="
                $router.push({
                  path: '/article',
                  query: {
                    id: item.id
                  }
                })
                ">
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

        <el-pagination style="margin-bottom: 10px;" layout="prev,pager,next" :total="paginate.total"
          v-model:current-page="paginate.pagenum" v-model:page-size="paginate.pagesize" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </el-main>

      <!-- ---------------------------------文章瀑布流-------------------------------------- -->

      <!-- ---------------------------------右侧工具栏-------------------------------------- -->

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

      <!-- ---------------------------------右侧工具栏-------------------------------------- -->
    </div>

    <!-- 主体部分-------------------------------------- -->

    <MainFooter></MainFooter>
  </div>
</template>

<style scoped>
.common-layout {
  margin: 0;
  padding: 2vw 0 0 2vw;
  box-sizing: border-box;
  height: max-content;
  overflow: hidden;

  .el-container {
    margin: 0 auto;
    gap: 1vw;

    .el-main {
      flex: 3;
      padding: 0;
      margin: 0;

      .card-header {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 1vw;
      }
    }

    .right-aside {
      margin: 0;
      padding: 0;
      flex: 1;

      .right-card {
        width: 100%;
      }
    }
  }
}

.infinite-list {
  height: max-content;
  padding: 0;
  margin: 2vw 0 10px 0;
  list-style: none;
  width: 100%;
}

.infinite-list .infinite-list-item {
  a {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    height: 88px;
    cursor: pointer;

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
