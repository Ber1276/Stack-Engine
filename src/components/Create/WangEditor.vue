<script setup>
import { onBeforeUnmount, shallowRef, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
import { PostSubmitArticle } from '@/api/user.js'


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}


// 内容 HTML
const editorData = ref({
  title: '',
  cover: null,
  content: '',
  summary: '',
  category: '',
  visibleRange: 0
})
// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    editorData.value.content = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})


//封面上传
const token = { token: localStorage.getItem('token') }
const fileList = ref([])
const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
    } totally`
  )
}
const beforeRemove = (uploadFile) => {
  return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
    () => true,
    () => false
  )
}
const handleSuccess = (response) => {
  editorData.value.cover = response.data.url
}

// 类别选项
const categoryOptions = [
  {
    value: '原创',
    label: '原创'
  },
  {
    value: '转载',
    label: '转载'
  },
  {
    value: '翻译',
    label: '翻译'
  }
]

// 可见性选项
// const visibleOptions = [
//   {
//     value: '全部可见',
//     label: '全部可见'
//   },
//   {
//     value: '仅我可见',
//     label: '仅我可见'
//   },
//   {
//     value: '粉丝可见',
//     label: '粉丝可见'
//   }
// ]


//文章上传
const handleSubmit = async (data, token) => {
  try {
    const res = await PostSubmitArticle(data, token)
    console.log(res.message)
    ElMessage({
      type: 'success',
      message: res.message
    })
  }
  catch (err) {
    console.log(err);
  }

}


</script>

<template>
  <div class="editor-demo ">
    <!-- 编辑器实例开始 -->

    <!-- 菜单栏开始 -->
    <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" />
    <!-- 菜单栏结束 -->

    <Editor v-model="editorData.content" :defaultConfig="editorConfig" @onCreated="handleCreated" class="editor-area" />

    <!-- 编辑器示例结束 -->

    <!-- 文章信息栏开始 -->

    <div class="grid-container">

      <div class="grid-item">
        <span class="title">标题</span>
        <el-input v-model="editorData.title" placeholder="您的标题" />
      </div>

      <div class="grid-item">
        <span class="title">封面</span>
        <el-upload v-model:file-list="fileList" class="upload-demo"
          action="http://49.232.134.192:8081/article/upload/file" :headers="token" :before-remove="beforeRemove"
          :limit="1" :on-exceed="handleExceed" :on-success="(response) => {
            return handleSuccess(response)
          }
            ">
          <el-button type="primary">上传封面</el-button>
        </el-upload>
      </div>

      <div class="grid-item">
        <span class="title">类别</span>
        <el-select v-model="editorData.category" placeholder="文章类别">
          <el-option v-for="item in categoryOptions" :key="item.label" :label="item.label"
            :value="item.value"></el-option>
        </el-select>
      </div>

      <div class="grid-item">
        <span class="title">摘要</span>
        <el-input v-model="editorData.summary" placeholder="文章摘要" />
      </div>
      <div class="grid-item">
        <span> 点击发表</span>
        <el-button class="submit" @click="handleSubmit(editorData, token.token)">
          发表文章</el-button>
      </div>
    </div>


    <!-- 文章信息栏结束 -->
  </div>
</template>

<style scoped>
.editor-demo {
  margin-top: 10px;
  height: 500px;
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.grid-container {
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
}

.grid-item {
  text-align: left;
  width: 240px;
  padding: 0 10px;

  button {
    height: 28px;
    width: 220px
  }
}
</style>
