<script setup>
import { onBeforeUnmount, shallowRef, onMounted, defineModel } from 'vue'
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
const editorData = defineModel()
// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    editorData.value.content = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})
</script>

<template>
  <div class="w-full px-4 h-full">
    <Toolbar class="h-1/5" :editor="editorRef" :defaultConfig="toolbarConfig" />
    <Editor
      style="height: 80%"
      v-model="editorData.content"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
    />
  </div>
</template>

<style scoped></style>
