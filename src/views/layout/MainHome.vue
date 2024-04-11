<script setup>
import instance from '@/utils/request';
import {
    ChromeFilled,
    MagicStick,
    Bell,
    CoffeeCup,

} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import MainList from '@/components/MainList.vue'

const list = ref([])
const isLoading = ref(true)
const props = ref({ list, isLoading })
const getList = async () => {
    const res = (await instance.get('https://tenapi.cn/v2/baiduhot'))
    list.value = res.data.data
    isLoading.value = false
}
onMounted(getList)
</script>
<template>
    <div class="common-layout">
        <el-container class="el-container">
            <el-aside width="200px" class="left-aside">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu default-active="1" class="el-menu-vertical-demo">
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
                    </el-col>
                </el-row>
            </el-aside>
            <el-main class="el-main ">
                <MainList v-model="props"></MainList>
            </el-main>
            <el-aside width="200px" class="right-aside">
                <el-card class="right-card" style="max-width: 280px">
                    <template #header>
                        <div class="card-header">
                            <span>Card name</span>
                        </div>
                    </template>
                    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
                    <template #footer>Footer content</template>
                </el-card>
            </el-aside>
        </el-container>
    </div>
</template>


<style scoped>
.el-container {
    margin: 0 auto;
    padding: 0 5% 0 5%;
    width: 100%;
    .el-main{
      --el-main-padding: 0 !important;
      padding: 0 5px 0 5px;
    }

}


</style>
