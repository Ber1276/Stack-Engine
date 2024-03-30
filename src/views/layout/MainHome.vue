<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="12">
                        <h5 class="mb-2"></h5>
                        <br>
                        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose">
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
                                <span>趣味</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <el-icon>
                                    <document />
                                </el-icon>
                                <span>Navigator Three</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <el-icon>
                                    <setting />
                                </el-icon>
                                <span>Navigator Four</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <MainList v-model="list"></MainList>
            </el-main>
            <el-aside>

            </el-aside>
        </el-container>
    </div>
</template>

<script setup>
import instance from '@/utils/request';
import {
    Document,
    Setting,
    Bell,
    CoffeeCup,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
const list = ref([])
const getlist = async () => {
    const res = (await instance.get('https://tenapi.cn/v2/baiduhot'))
    list.value = res.data.data
}
onMounted(getlist)
console.log(list.value);
</script>

<style scoped>
.el-container {
    margin: 0 auto;
    width: 100%;

    .el-aside {
        margin-left: 5%;
        width: 200px;
    }
}

.el-row {

    h5 {
        text-align: center;
        width: 180px;
    }

    .el-menu {
        width: 200px
    }
}
</style>