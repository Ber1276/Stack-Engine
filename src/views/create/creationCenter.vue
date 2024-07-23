<script setup>
import WangEditor from '@/components/WangEditor.vue'
import { GetArticleList } from '@/api/user.js'
import { onMounted } from 'vue'
let userArticleList = []
onMounted(() => {
  GetArticleList(1, localStorage.getItem('token')).then((res) => {
    userArticleList = res.data.data.records
    console.log(userArticleList)
  })
})
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
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <wang-editor></wang-editor>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-60 min-h-full bg-white text-base-content">
        <!-- Sidebar content here -->
        <li v-for="item in userArticleList" :key="item.id">
          <a>{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
