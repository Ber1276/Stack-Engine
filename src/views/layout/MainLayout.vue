<script setup>
import { RouterView } from 'vue-router'
import MainHeader from '@/components/Main/MainHeader.vue'
import MainAside from '@/components/Main/MainAside.vue'
</script>
<template>
  <div>
    <MainHeader></MainHeader>
    <div class="main-home-container">
      <div class="main-aside">
        <MainAside></MainAside>
      </div>
      <div>
        <RouterView class="main-router-view"></RouterView>
      </div>
    </div>

  </div>

</template>

<style scoped>
.main-home-container {
  position: relative;
  display: flex;
}

.main-aside {
  width: 16vw;
}

.main-router-view {
  width: 82vw;
}
</style>
