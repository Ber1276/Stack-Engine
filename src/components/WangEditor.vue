<script setup>
import { onBeforeUnmount, shallowRef, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'

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
  visibleRange: '',
  visibleTime: ''
})
// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    editorData.value.content = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

//封面上传
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
</script>

<template>
  <div class="editor-demo mx-auto">
    <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" />
    <Editor v-model="editorData.content" :defaultConfig="editorConfig" @onCreated="handleCreated" />
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
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
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
  </div>
</template>

<style scoped>
.editor-demo {
  margin-top: 10px;
  height: 500px;
  width: 1200px;
}
</style>
