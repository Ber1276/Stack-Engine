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
        <el-sub-menu index="2">
            <template #title>课程</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3">圈子</el-menu-item>
        <el-menu-item index="4">竞赛</el-menu-item>
    </el-menu>
</template>
<style scoped>
.el-menu-demo {
    width: 100%;
}
</style>