<script setup>
import { Bell, ChromeFilled, CoffeeCup, MagicStick } from '@element-plus/icons-vue'
</script>

<template>
  <el-menu default-active="1" class="left-aside">
    <el-menu-item index="1">
      <el-icon>
        <Bell />
      </el-icon>
      <span>关注</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <CoffeeCup />
      </el-icon>
      <span>排行榜</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <ChromeFilled />
      </el-icon>
      <span>前后端</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <MagicStick />
      </el-icon>
      <span>人工智能</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.left-aside {
  position: fixed;
  left: 0;
  top: calc(var(--el-menu-horizontal-height));
  min-height: 100vh;
  width: var(--main-aside-width);
  --el-menu-bg-color: #fff;
}
</style>
