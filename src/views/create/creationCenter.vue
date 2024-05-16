<script setup>
import WangEditor from '@/components/WangEditor.vue'
</script>

<template>
  <div class="main-container mx-auto h-screen">
    <div class="navbar bg-white py-0.5">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">创作中心</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="@/assets/img/logo.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-container flex flex-row justify-between mt-4 h-5/6">
      <div class="w-1/6 px-0.5">
        <ul class="menu bg-white mx-auto w-full h-full">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <wang-editor class="w-5/6 mx-auto h-64"></wang-editor>
    </div>
  </div>
</template>

<style scoped></style>
