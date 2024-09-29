<script setup>
import MainHeader from '@/components/Main/MainHeader.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue'
const route = useRoute()



//实现搜索结果获取
const keyword = ref(route.query.keyword)
keyword
const situation = ref({
    isLoading: true,
    list: [],
})
const getArticles = () => {

}


//分页管理
const paginate = ref({
    total: 0,
    pagenum: 1,
    pagesize: 10,
})
const handleCurrentChange = () => {
    getArticles()
}

const handleSizeChange = () => {
    paginate.value.pagenum = 1
    getArticles()
}
</script>
<template>
    <MainHeader></MainHeader>
    <div class="main-container">
        <ul v-loading="situation.isLoading" class="list" style="overflow: auto">
            <el-card>
                <li v-for="item in situation.list" :key="item.id" class="list-item">
                    <a @click="
                        $router.push({
                            path: '/article',
                            query: {
                                id: item.id
                            }
                        })
                        ">
                        <span class="list-item-reading">{{ item.reading }}读过</span>
                        <div>
                            <p class="list-item-title">{{ item.title }}</p>
                            <p class="list-item-summary">{{ item.summary }}</p>
                        </div>
                        <span class="list-item-author">作者：{{ item.author }}</span>
                    </a>
                </li>
            </el-card>
        </ul>

        <el-pagination style="margin-bottom: 10px;" layout="prev,pager,next" :total="paginate.total"
            v-model:current-page="paginate.pagenum" v-model:page-size="paginate.pagesize"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
</template>
<style scoped>
.main-container {
    padding-top: var(--el-menu-horizontal-height);
    padding-left: 100px;
    padding-right: 100px;
}
</style>