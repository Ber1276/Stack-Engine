<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff"
        text-color="#000" active-text-color="blue" @select="handleSelect">
        <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
        <el-menu-item index="2"><a href="/learn">课程</a></el-menu-item>
        <el-menu-item index="3">圈子</el-menu-item>
        <el-menu-item index="4">竞赛</el-menu-item>
    </el-menu>
</template>
<style scoped>
.el-menu-demo {
    width: 100%;

    a {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
}
</style>