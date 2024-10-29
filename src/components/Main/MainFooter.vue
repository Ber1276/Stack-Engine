<script setup>
import { ref } from "vue";
const product = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }])
</script>

<template>
  <div class="footer-container">

    <div class="products-container">
      <div class="products" v-for="item in product" :key="item.id">
        <p class="products-title">我的产品</p>
        <div class="product-name">我的喜欢</div>
        <div class="product-name">我的徽章</div>
        <div class="product-name">我的收藏</div>
        <div class="product-name">复活吧！我的爱人</div>
      </div>
    </div>

    <div class="bottom-container">
      <div class="copyright-container">
        <p>Copyright</p>
        <p>鲁xxxxx号-2浙公网安备xxxxxx号ICP 经营许可 鲁xxxxxxxxx</p>
        <p>xxxx有限公司版权所有</p>
      </div>
      <div class="logo-container">
        <img src="/src/assets/img/logo.webp" />
        <p>226寝旗下开发者交流平台</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.footer-container {
  background-color: #fff;
}

.products-container {
  display: flex;
  justify-content: space-around;

  .products {
    display: block;
    width: 200px;
    text-align: left;
    padding: 20px;

    .products-title {
      font-weight: 600;
      font-size: 16px;
      padding-bottom: 8px;
      font-family: system-ui, -apple-system;
    }

    .product-name {
      cursor: pointer;
      color: rgb(108, 117, 125);
      font-family: system-ui, -apple-system;
    }
  }
}

.bottom-container {
  padding: 20px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 120px;
}

.copyright-container {
  margin-left: 60px;
  padding-top: 8px;
}

.logo-container {
  margin-right: 60px;
  height: 120px;
  padding-top: 10px;
  font-size: 12px;
  text-align: center;

  img {
    width: 140px;
    object-fit: cover;
  }
}
</style>
