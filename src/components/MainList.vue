<template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="(item, index) in modelvalue" :key="index" class="infinite-list-item">
            <a :href="item.url">
                {{ item.name }}
            </a>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
    count.value += 2
}
const modelvalue = defineModel()
console.log(modelvalue);

</script>

<style>
.infinite-list {
    height: max-content;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: max-content;
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