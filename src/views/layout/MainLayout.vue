<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/Main/MainHeader.vue'
import MainAside from '@/components/Main/MainAside.vue'
</script>
<template>
  <div class="main-home-container">
    <MainHeader></MainHeader>
    <MainAside></MainAside>
    <RouterView class="main-router-view"></RouterView>
  </div>

</template>

<style scoped>
.main-home-container {
  position: relative;
}

.main-router-view {
  position: absolute;
  left: var(--main-aside-width);
  top: var(--el-menu-horizontal-height);
  width: calc(100% - var(--main-aside-width));
  overflow: hidden;
}
</style>
