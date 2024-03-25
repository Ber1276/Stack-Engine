<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
console.log(HeaderBar);
import { useCounter } from '@/stores/counter'
const counter = useCounter()
</script>

<template>
  <div>{{ counter.count }}</div>
  <div>6666</div>
  <HeaderBar></HeaderBar>
</template>

<style scoped></style>
