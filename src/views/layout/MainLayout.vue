<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainAside from '@/components/MainAside.vue'
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
}
</style>
