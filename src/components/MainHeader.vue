<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
import router from '@/router';
// import { useRouter, useRoute } from 'vue-router';
// const router = useRouter()
// const route = useRoute()

</script>
<template>
    <!-- {{ route.path }} -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff"
        text-color="#000" active-text-color="blue" @select="handleSelect">
        <el-menu-item index="1" @click="router.push('/home')">首页</el-menu-item>
        <el-menu-item index="2" @click="router.push('/learn')">课程</el-menu-item>
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