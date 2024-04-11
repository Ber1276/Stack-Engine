<script lang="ts" setup>
import { ref } from 'vue'
import { defineModel } from 'vue';
const count = ref(0)

const load = () => {
    count.value += 2
}
const modelvalue = defineModel()
</script>

<template>
    <ul v-infinite-scroll="load" v-loading="modelValue.isLoading" class="infinite-list" style="overflow: auto;">
        <el-card>
            <template #header>
                <div class="card-header">
                    <el-button>推荐</el-button>
                    <el-button>最新</el-button>
                </div>
            </template>
            <li v-for="(item, index) in modelvalue.list" :key="index" class="infinite-list-item">
                <a :href="item.url">
                    {{ item.name }}
                </a>
            </li>
            <template #footer>Footer content</template>
        </el-card>
    </ul>
</template>


<style>
.infinite-list {
    height: max-content;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: max-content;
    max-width: 800px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);

    a,
    a:hover {
        text-decoration: none;
        color: #67C23A;
    }
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}
</style>
