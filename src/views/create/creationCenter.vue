<script setup>
import WangEditor from '@/components/Create/WangEditor.vue'
import { onMounted, ref } from 'vue'
import { Delete, House } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { GetArticleList } from '@/api/user.js'
import { DeleteArticle } from '@/api/user.js'
import router from '@/router'
import { useUser } from '@/stores'

//数据
const userState = useUser()
const userArticleList = ref([])

//渲染侧边文章列表
const renderList = async () => {
  const payload = {
    pageNo: 1,
    pageSize: 10,
    userId: userState.userId,
    token: localStorage.getItem('token')
  }
  const res = await GetArticleList(payload)

  userArticleList.value = res.data.data.records
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
        const res = DeleteArticle(id, localStorage.getItem('token'))
        res
        renderList()
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
        <ul>
          <span class="title">文件列表</span>
          <li v-for="item in userArticleList" :key="item.id">
            <div>
              <a style="line-height: 40px">{{ item.title }}</a>
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
  justify-content: space-between;
  padding-right: 50px;
}

.aside {
  background-color: #fff;
  width: 220px;
  padding: 10px;
  height: 680px;
  overflow: hidden;

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  li {
    position: relative;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
  }

  .delete {
    position: absolute;
    right: 10px;
    top: 13px;
    font-size: 20px;
  }
}

.editor {
  width: 1200px;
  height: max-content;
}
</style>
