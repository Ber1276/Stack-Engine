<script setup>
//Router
import { RouterView } from 'vue-router'
import router from './router';
console.log(router)
//Pinia
import { useCounter } from '@/stores/index'
const counter = useCounter()
console.log(counter);
</script>

<template>
  <MainHeader></MainHeader>
  <RouterView></RouterView>
</template>

<style scoped></style>
