<script setup>
import WangEditor from '@/components/WangEditor.vue'
import { onMounted, ref } from 'vue'
import { Delete, House } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { GetArticleList } from '@/api/user.js'
import { DeleteArticle } from '@/api/user.js'
import router from '@/router'

//数据
const userArticleList = ref([])

//渲染侧边文章列表
const renderList = async () => {
  const payload = {
    pageNo: 1,
    pageSize: 10,
    author: localStorage.getItem('username'),
    token: localStorage.getItem('token')
  }
  const res = await GetArticleList(payload)
  userArticleList.value = res.data.data.records
  console.log(res.data.data.records)
}
onMounted(renderList)

//删除选中文章
const deleteArticle = (id) => {
  ElMessageBox.confirm('是否删除该文章', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      DeleteArticle(id, localStorage.getItem('token')).then((res) => {
        if (res.data.code === 200) {
          renderList()
        }
      })
      ElMessage({
        type: 'success',
        message: '删除成功!'
      })
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
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="navbar bg-white">
        <div class="flex-none">
          <label for="my-drawer" class="btn btn-primary drawer-button">
            <svg fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">创作中心</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost" @click="router.push('/home')">
            <el-icon><House /></el-icon>
          </button>
        </div>
      </div>
      <wang-editor></wang-editor>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="p-4 w-60 min-h-full bg-white list-none">
        <!-- Sidebar content here -->
        <li class="text-left text-2xl mb-4 text-blue-500 font-bold">文件列表</li>
        <li
          v-for="item in userArticleList"
          :key="item.id"
          class="h-10 hover:bg-white hover:text-blue-500"
        >
          <div class="relative h-10">
            <a style="line-height: 40px">{{ item.title }}</a>
            <el-icon class="right-2 top-3.5 absolute align-middle" @click="deleteArticle(item.id)"
              ><Delete
            /></el-icon>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
