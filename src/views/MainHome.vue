<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="12">
                        <h5 class="mb-2"></h5>
                        <br>
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                            @close="handleClose">
                            <el-sub-menu index="1">
                                <template #title>
                                    <el-icon>
                                        <location />
                                    </el-icon>
                                    <span>Navigator One</span>
                                </template>
                                <el-menu-item-group title="Group One">
                                    <el-menu-item index="1-1">item one</el-menu-item>
                                    <el-menu-item index="1-2">item two</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="Group Two">
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1-4">
                                    <template #title>item four</template>
                                    <el-menu-item index="1-4-1">item one</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-menu-item index="2">
                                <el-icon><icon-menu /></el-icon>
                                <span>Navigator Two</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
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
        </el-container>
    </div>
</template>

<script setup>
import instance from '@/utils/request';
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
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
.el-row {
    width: 200px;

    h5 {
        text-align: center;
        width: 180px;
    }

    .el-menu {
        width: 200px
    }
}
</style>