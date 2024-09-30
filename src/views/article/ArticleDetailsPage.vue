<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FavButton from '@/components/littile/FavButton.vue'
import { Share, Star } from '@element-plus/icons-vue'
import { getArticleDetils } from '@/api/article'
import MainHeader from '@/components/Main/MainHeader.vue'

const route = useRoute()
const router = useRouter()
router
const id = ref(route.query.id)

//获取文章内容
const getdetils = async () => {
  let res = await getArticleDetils(id.value)
  res = res.data.data
  total.value = res
  document.querySelector('.article').innerHTML = res.content
}
const total = ref({})
getdetils()
</script>

<template>
  <!-- 顶栏 -->
  <MainHeader></MainHeader>

  <!-- 主体 -->
  <div class="main">
    <div class="detils">
      <div class="cover"></div>
      <div class="board">
        <div class="board-left">
          <div class="title">{{ total.title }}</div>
          <div class="banner">
            <div class="author">
              {{ total.author }}
            </div>
            <div class="remarks">
              <el-tag> 好评：{{ total.good }} </el-tag>
              <el-tag> 收藏：{{ total.collect }} </el-tag>
              <el-tag> 差评：{{ total.bad }} </el-tag>
            </div>
          </div>
        </div>
        <!-- 控件 -->
        <div class="controls">
          <el-icon class="fav">
            <FavButton :id="id"></FavButton>
          </el-icon>
          <el-icon>
            <Star />
          </el-icon>
          <el-icon>
            <Share />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="article"></div>
    <div class="comment">
      <div class="comment-left">
        <div class="author">
          {{ total.author }}
        </div>
      </div>
      <!-- 控件 -->
      <div class="controls">
        <el-icon class="fav">
          <FavButton :id="id"></FavButton>
        </el-icon>
        <el-icon>
          <Star />
        </el-icon>
        <el-icon>
          <Share />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: calc(var(--el-menu-horizontal-height) + 2px);
  padding-left: 100px;
  padding-right: 100px;
  overflow: hidden;
}

.detils {
  width: 100%;
  height: 120px;
  background-color: #fff;
  padding: 10px 20px;

  .board {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .board-left {
    .title {
      font-size: 32px;
    }

    .banner {
      display: flex;
      align-items: center;
      margin-top: 6px;
      margin-bottom: 6px;
      gap: 10px;
    }
  }

  .controls {
    margin: auto 10px auto auto;
    display: flex;
    gap: 10px;
    flex-direction: row;
    font-size: 24px;

    .fav {
      margin-left: -1px;
      margin-top: -1px;
    }
  }
}

.article {
  padding: 0 20px;
  padding-top: 20px;
  min-height: 800px;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid var(--el-color-primary);
  border-bottom: 1px solid var(--el-color-primary);
}

.comment {
  display: flex;
  height: 60px;
  padding: 10px 20px;
  background-color: #fff;
  width: 100%;
  justify-content: space-between;
  font-size: 22px;
  align-items: center;

  .controls {
    font-size: 28px;
    display: flex;
    gap: 10px;
    align-items: baseline;
  }
}
</style>
