<script setup>
import { ref } from 'vue'
const formLabelAlign = ref({
  name: '',
  region: '',
  type: ''
})
</script>

<template>
  <div class="main-container pl-10">
    <el-form
      :label-position="'left'"
      label-width="auto"
      :model="formLabelAlign"
      style="max-width: 600px"
    >
      <el-form-item label="Name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
