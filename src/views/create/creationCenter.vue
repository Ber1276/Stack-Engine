<script setup>
import { ref } from 'vue'
import WangEditor from '@/components/WangEditor.vue'
const editorData = ref({
  title: '',
  cover: null,
  content: '',
  summary: '',
  category: '',
  visibleRange: '',
  visibleTime: ''
})
const handleSubmit = () => {
  console.log('submit', editorData.value)
}
const handleDelete = () => {
  editorData.value.content = ''
}
</script>

<template>
  <div class="main-container mx-auto h-screen">
    <div class="navbar bg-primary py-0.5">
      <div class="flex-1">
        <a class="btn btn-primary text-white text-xl">创作中心</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full border-2 border-white">
              <img alt="Tailwind CSS Navbar component" src="@/assets/img/logo.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-container flex flex-row justify-around mt-4 h-5/6">
      <div class="w-1/6 px-0.5">
        <ul class="menu bg-white mx-auto w-full h-full">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
          <li><a>Item 3</a></li>
          <li><a>Item 3</a></li>
          <li><a>Item 3</a></li>
          <li><a>Item 3</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div class="flex flex-col">
        <wang-editor class="w-5/6 mx-auto h-1/2" v-model="editorData"></wang-editor>
        <div class="control-container h-1/2 pt-8 flex flex-row justify-between">
          <div class="title-container w-1/4 pl-4 pr-4">
            <input
              type="text"
              placeholder="请输入标题"
              class="input bg-white text-black input-bordered w-full max-w-xs"
            />
          </div>
          <div class="cover-container w-1/4 px-4">
            <div class="cover-container-item">
              <input type="file" class="file-input bg-white file-input-primary w-full max-w-xs" />
            </div>
          </div>
          <div class="comment-container w-1/4 px-4">
            <select class="select select-primary bg-white w-full max-w-xs">
              <option disabled selected>是否开启评论区</option>
              <option>是</option>
              <option>否</option>
            </select>
          </div>
          <div class="article-container w-1/4 px-4 flex flex-col">
            <div class="btn-group flex flex-row justify-around">
              <button
                class="btn bg-white text-black hover:bg-primary hover:text-white"
                @click="handleDelete"
              >
                删除
              </button>
              <button
                class="btn bg-white text-black hover:bg-primary hover:text-white"
                @click="handleSubmit"
              >
                发表
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="h-4 bg-primary fixed bottom-0 w-full"></footer>
  </div>
</template>

<style scoped></style>
