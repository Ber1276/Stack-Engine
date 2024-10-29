<script setup>
import { Bell, ChromeFilled, CoffeeCup, MagicStick } from '@element-plus/icons-vue'
</script>

<template>
  <div class="left-aside">
    <div class="menu-item">
      <el-icon>
        <Bell />
      </el-icon>
      <span>关注</span>
    </div>
    <div class="menu-item">
      <el-icon>
        <CoffeeCup />
      </el-icon>
      <span>排行榜</span>
    </div>
    <div class="menu-item">
      <el-icon>
        <ChromeFilled />
      </el-icon>
      <span>前后端</span>
    </div>
    <div class="menu-item">
      <el-icon>
        <MagicStick />
      </el-icon>
      <span>人工智能</span>
    </div>
  </div>
</template>

<style scoped>
.left-aside {
  position: fixed;
  left: 0;
  height: 100vh;
  width: 16vw;
  background-color: #fff;
  padding: 2vw 0 2vw 2vw;
}

.menu-item {
  height: 6vh;
  font-weight: 600;
  display: flex;
  gap: 1vw;
  align-items: center;
  cursor: pointer;
}
</style>
