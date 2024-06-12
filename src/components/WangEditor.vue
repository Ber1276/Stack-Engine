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
const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}
const handlePreview = (uploadFile) => {
  console.log(uploadFile)
}
const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
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
  console.log(response)
  editorData.value.cover = response.data.url
}

//文章上传
const handleSubmit = async (data, token) => {
  const { data: res } = await PostSubmitArticle(data, token)
  console.log(res)
}
</script>

<template>
  <div class="editor-demo mx-auto relative">
    <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" />
    <Editor
      v-model="editorData.content"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
      class="editor-area"
    />
    <div class="w-full mt-4 grid-cols-4 grid-rows-1 grid gap-4">
      <div class="flex gap-2 mb-4 h-7">
        <span class="text-xl">标题</span>
        <el-input
          v-model="editorData.title"
          style="width: 240px; height: 28px"
          placeholder="your title"
        />
      </div>
      <div class="flex gap-2 mb-4 h-7">
        <span class="text-xl">封面</span>
        <el-upload
          v-model:file-list="fileList"
          class="upload-demo"
          action="http://49.232.134.192:8081/article/upload/file"
          :headers="token"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
          :on-success="
            (response) => {
              return handleSuccess(response)
            }
          "
        >
          <el-button type="primary" style="height: 28px; width: 240px">Click to upload</el-button>
        </el-upload>
      </div>
      <div class="flex gap-2 mb-4 h-7">
        <span class="text-xl">类别</span>
        <el-input
          v-model="editorData.category"
          style="width: 240px; height: 28px"
          placeholder="your category"
        />
      </div>
      <div class="flex gap-2 mb-4 h-7">
        <span class="text-xl">摘要</span>
        <el-input
          v-model="editorData.summary"
          style="width: 240px; height: 28px"
          placeholder="your summary"
        />
      </div>
    </div>
    <div>
      <el-button class="float-right" @click="handleSubmit(editorData, token.token)">
        发表文章</el-button
      >
    </div>
  </div>
</template>

<style scoped>
.editor-demo {
  margin-top: 10px;
  height: 500px;
  width: 1200px;
}
</style>
