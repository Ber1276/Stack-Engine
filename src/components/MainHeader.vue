<script setup>
import { ref } from 'vue'
import router from '@/router';
import MainUserLogin from '@/components/MainUserLogin.vue'
import {
    ArrowDown
} from '@element-plus/icons-vue'

let imgSrc = ref('/src/assets/img/logo.webp')
const activeIndex = ref('1')
const input = ref('')
const dialogVisible = ref(false)
const loginVisible = ref(true)

</script>
<template>
    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0" @click="router.push('/home')">
            <img style="width: 120px;height:max-content;margin: 0 auto;" src="/src/assets/img/logo.webp"
                alt="Element logo" />
        </el-menu-item>
        <el-menu-item index="1" @click="router.push('/home')">首页</el-menu-item>
        <el-menu-item index="2" @click="router.push('/learn')">课程</el-menu-item>
        <el-menu-item index="3">圈子</el-menu-item>
        <el-menu-item index="4">竞赛</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="5" id="header-input">
            <el-input v-model="input"  placeholder="搜你所想" clearable />
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="6" @click="dialogVisible = true" v-if="loginVisible">登录</el-menu-item>
        <el-menu-item index="7">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img :src=imgSrc alt="Element logo" style="width: 120px;height: auto">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出账号</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-menu-item>


    </el-menu>
    <!-- 登录弹出框 -->
    <el-dialog v-model=dialogVisible width="500" style="height: max-content" center>
        <MainUserLogin v-model:dialogVisible="dialogVisible" v-model:loginVisible="loginVisible"
            v-model:imgSrc="imgSrc">
        </MainUserLogin>
        <div class="flex flex-col text-center">
            <p>没有账号？<a href="/user" style="text-decoration: none;color: black;">注册</a></p>
        </div>
    </el-dialog>
</template>
<style scoped>

.el-menu-demo {
    border-top: 10px solid var(--el-color-primary);
    width:100%;
    --el-menu-horizontal-height: 60px;
    margin: auto auto;
    padding: 0 5% 0 5%;
    #header-input {
        border-bottom: none;
        flex: 1.2;
    }
    .flex-grow{
      flex:0.2;
    }
}
</style>
