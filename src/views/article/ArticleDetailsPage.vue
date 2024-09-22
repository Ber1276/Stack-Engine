<template>
    <!-- 顶栏 -->
    <div class="header">
        <div @click="router.push({ path: '/home' })">
            <el-icon class="back-to-home">
                <House />
            </el-icon>
        </div>

    </div>

    <!-- 主体 -->
    <div class="main">
        <div class="detils">
            作者
        </div>
        <div class="article">
            {{ id }}
        </div>
    </div>

    <!-- 控件 -->
    <div class="controls">
        <el-icon class="fav">
            <FavButton></FavButton>
        </el-icon>
        <el-icon>
            <Star />
        </el-icon>
        <el-icon>
            <Share />
        </el-icon>
    </div>
</template>

<script setup>
import { House, Share, Star } from '@element-plus/icons-vue';
import FavButton from '@/components/littile/FavButton.vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const id = route.query.id
id
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    z-index: 999;
    margin: 0 auto;
    width: 100%;
    height: 40px;
    padding: 8px 10px;
    background-color: var(--el-color-primary);
    overflow: hidden;

    .back-to-home {
        font-size: 24px;
        color: #fff;
    }
}

.main {
    width: 100%;
    height: max-content;
    position: relative;
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
}

.detils {
    height: 100%;
    width: 20%;
    outline: 1px solid #000;
}

.article {
    height: 100%;
    width: 80%;
    outline: 1px solid #000;
}

.controls {
    display: flex;
    gap: 10px;
    flex-direction: column;
    position: absolute;
    bottom: 50%;
    right: 20%;
    transform: translateY(50%);
    font-size: 24px;

    .fav {
        margin-left: -1px;
        margin-bottom: 2px;
    }
}
</style>