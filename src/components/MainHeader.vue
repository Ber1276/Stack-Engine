<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
import router from '@/router';
const input = ref('')
const dialogVisible = ref(false)
const loginVisible = ref(true)
let imgSrc = ref('')
import {
    ArrowDown
} from '@element-plus/icons-vue'
import MainUserLogin from '@/components/MainUserLogin.vue'

const handleClose = (done) => {
    done()
    dialogVisible.value = false
}

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
        <el-menu-item index="5">
          <img :src=imgSrc alt="">
        </el-menu-item>

        <div class="flex-grow" />
        <el-menu-item index="1" id="header-input">
            <el-input v-model="input" style="width: 240px; " placeholder="搜你所想" clearable />
        </el-menu-item>
        <el-menu-item index="2" @click="dialogVisible = true" v-if="loginVisible">登录</el-menu-item>
        <el-menu-item index="3">
            <el-dropdown>
                <span class="el-dropdown-link">
                    username
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
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
    <el-dialog v-model=dialogVisible width="500" style="height: max-content" :before-close="handleClose" center>
        <MainUserLogin v-model:dialogVisible="dialogVisible" v-model:loginVisible="loginVisible"
            v-model:imgSrc="imgSrc">
        </MainUserLogin>
        <div id="footer">
            <p>没有账号？<a href="/user" style="text-decoration: none;color: black;">注册</a></p>
        </div>
    </el-dialog>
</template>
<style scoped>
.el-menu-demo {
    width: 100%;

    #header-input {
        border-bottom: none;
    }

    a {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
}

#footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: min-content;
    padding-top: 0;
    margin-top: -20px;
    margin-bottom: -10px;
}


.flex-grow {
    flex-grow: 1;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>
