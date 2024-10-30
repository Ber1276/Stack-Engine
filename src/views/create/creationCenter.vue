<script setup>
import WangEditor from '@/components/Create/WangEditor.vue'
import { onMounted, ref } from 'vue'
import { Delete, House } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { GetArticleList } from '@/api/user.js'
import { getArticleDetils } from '@/api/article'
import { DeleteArticle } from '@/api/user.js'
import router from '@/router'
import { useUser, useArticle } from '@/stores'

//数据
const userState = useUser()
const articleState = useArticle()
const userArticleList = ref([])
const selectedArticleList = ref()

//渲染侧边文章列表
const renderList = async () => {
  const payload = {
    pageNo: 1,
    pageSize: 10,
    userId: userState.userId,
    token: localStorage.getItem('token')
  }
  const res = await GetArticleList(payload)
  const records = res.data.data.records
  userArticleList.value = records
}
//渲染选中文章
const renderArticle = async () => {
  const payload = selectedArticleList.value
  const res = await getArticleDetils(payload)
  const records = res.data.data
  console.log(records);
  articleState.articleContent = records.content
}
onMounted(renderList)

//删除选中文章
const deleteArticle = (id) => {
  ElMessageBox.confirm('是否删除该文章', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      try {
        DeleteArticle(id, localStorage.getItem('token'))
        ElMessage({
          type: 'success',
          message: '删除成功!'
        })
      }
      catch (err) {
        console.log('删除错误', err);
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除'
      })
    })
    .finally(() => {
      location.reload()
    })
}
</script>

<template>
  <div class="container">

    <div class="header">
      <span>开始您的创作</span>
      <el-icon class="icon" @click="router.push({ path: '/home' })">
        <House />
      </el-icon>
    </div>


    <div class="main">
      <div class="aside">
        <span class="title">文件列表</span>
        <ul>
          <li v-for="item in userArticleList" :key="item.id"
            :class="{ active: (articleState.currentArticleId == item.id) }">
            <div @click="() => {
              articleState.currentArticleId = item.id
              selectedArticleList = item.id
              renderArticle()
            }">
              <div class="title-container">
                <a>{{ item.title }}</a>
              </div>
              <el-icon class="delete" @click="deleteArticle(item.id)">
                <Delete />
              </el-icon>
            </div>
          </li>
        </ul>
      </div>

      <div class="editor">
        <wang-editor @submit-success="renderList"></wang-editor>
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
}

.header {
  height: 60px;
  padding: 10px 0;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  margin-bottom: 10px;
  color: var(--el-color-primary);
  font-size: 24px;

  .icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
  }
}

.main {
  display: flex;
  justify-content: space-around;
  height: calc(100vh - 70px);
}

.aside {
  background-color: #fff;
  width: 16vw;
  padding: 10px;
  height: 100%;
  overflow: hidden;


  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .active {
    background-color: #f0f0f0;
    color: #409EFF;
  }

  li {
    padding: 0 5px;
    position: relative;

    .title-container {
      width: 160px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      a {
        height: 40px;
        font-size: 18px;
        line-height: 40px;
      }


    }

    .delete {
      position: absolute;
      right: 10px;
      top: 12px;
      font-size: 20px;
      z-index: 100;
    }

  }

}

.editor {
  width: 82vw;
  height: 100%;
}
</style>
