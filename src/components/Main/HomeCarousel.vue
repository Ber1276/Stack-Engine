<script setup>
import { ref } from 'vue';
const imglist = ref([
  { id: '1', source: '/src/assets/img/img01.webp' },
  { id: '2', source: '/src/assets/img/img02.webp' },
  { id: '3', source: '/src/assets/img/img03.webp' },
  { id: '4', source: '/src/assets/img/img04.webp' }
])





</script>

<template>
  <el-carousel :interval="5000" arrow="always">
    <img src="../../assets/img/img01.webp" alt="">
    <el-carousel-item v-for="item in imglist" :key="item.id">
      <img :src="item.source" alt="randomimg">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel {
  max-height: 200px;

  .el-carousel__item {
    width: 60vw;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
