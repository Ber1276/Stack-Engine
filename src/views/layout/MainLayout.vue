<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/Main/MainHeader.vue'
import MainAside from '@/components/Main/MainAside.vue'
</script>
<template>
  <MainHeader></MainHeader>
  <MainAside></MainAside>
  <RouterView class="main-router-view"></RouterView>
</template>

<style scoped>
.main-router-view {
  position: relative;
  left: var(--main-aside-width);
  top: var(--el-menu-horizontal-height);
  width: calc(100% - var(--main-aside-width));
  overflow: hidden;
}
</style>
