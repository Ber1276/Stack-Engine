<script setup>
import MainHeader from '@/components/Main/MainHeader.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import { getSearchResults } from '@/api/article';
const route = useRoute()

//分页管理
const paginate = ref({
    total: 0,
    pagenum: 1,
    pagesize: 10,
})
//实现搜索结果获取
const keyword = ref(route.query.keyword)
const situation = ref({
    isLoading: true,
    list: [],
})




const getArticles = () => {
    situation.value.isLoading = true
    try {
        getSearchResults(paginate.value.pagenum, paginate.value.pagesize, keyword.value).then(res => {
            console.log(res);
            situation.value.list = res.data.records
            paginate.value.total = res.data.total
            situation.value.isLoading = false
        })
    } catch (err) {
        situation.value.isLoading = true
        console.error(err)
    }
}
const handleCurrentChange = () => {
    getArticles()
}

const handleSizeChange = () => {
    paginate.value.pagenum = 1
    getArticles()
}
getArticles()





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

.list {
    height: max-content;
    padding: 0;
    margin: 10px 0 10px 0;
    list-style: none;
    width: 100%;
}

.list .list-item {
    a {
        display: flex;
        justify-content: space-around;
        padding: 10px;
        height: 88px;

        .list-item-reading {
            line-height: 68px;
            width: 80px;
        }

        .list-item-author {
            line-height: 68px;
            width: 200px;
        }

        div {
            width: 600px;
            position: relative;

            .list-item-title {
                font-size: 36px;
                position: absolute;
                top: 0;
                margin-top: -10px;
            }

            .list-item-summary {
                font-size: 12px;
                position: absolute;
                bottom: 0;
            }
        }
    }
}
</style>