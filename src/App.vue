<script setup>
//Router
import { RouterLink, RouterView } from 'vue-router'
//Components
import HeaderBar from './components/HeaderBar.vue'
//Pinia
import { useCounter } from '@/stores/counter'
const counter = useCounter()
</script>

<template>
  <div>{{ counter.count }}</div>
  <div>6666</div>
  <HeaderBar></HeaderBar>
  <RouterLink to="/"></RouterLink>
  <RouterView></RouterView>
</template>

<style scoped></style>
