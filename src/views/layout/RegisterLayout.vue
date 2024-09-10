<script setup>
import { reactive, ref } from 'vue'
import { RegisterPost } from '@/api/user.js'
import router from '@/router/index.js'
import { ElMessage } from 'element-plus'
const ruleFormRef = ref()
const registerDetails = ref({
  username: '',
  password: ''
})
const rules = reactive({
  username: [{ required: true, message: '账户名不为空', trigger: 'blur' }],
  password: [
    { required: true, min: 6, max: 18, message: '密码长度在6到18位', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]{6,18}$/, message: '密码只能包含数字字母下划线', trigger: 'blur' }
  ]
})
const RegisterFn = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        await RegisterPost(registerDetails.value)
        ElMessage({ message: 'success', type: 'success' })
        formEl.resetFields()
        setTimeout(() => {
          router.push({ path: '/' })
        }, 1000)
      } catch (error) {
        ElMessage({ message: error.response.data.message, type: 'error' })
      }
    } else {
      ElMessage({ message: '表单校验失败', type: 'error', duration: 0 })
      return false
    }
  })
}
</script>

<template>
  <div class="form-container">
    <el-form ref="ruleFormRef" class="card-body" :model="registerDetails" :rules="rules">
      <el-form-item class="form-control" prop="username">
        <el-input v-model="registerDetails.username" size="large" type="text" placeholder="username"
          class="bg-white w-full my-2.5" />
      </el-form-item>
      <el-form-item class="form-control" prop="password">
        <el-input v-model="registerDetails.password" type="password" size="large" placeholder="password"
          class="bg-white w-full" />
      </el-form-item>
      <el-form-item class="form-control mt-6">
        <el-button class="register-button w-full" @click="RegisterFn(ruleFormRef)">
          Register
        </el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped>
.register-button {
  --el-button-bg-color: var(--el-color-primary);
  --el-button-active-bg-color: var(--el-color-primary);
  --el-button-hover-bg-color: var(--el-color-primary);
  --el-button-text-color: white;
  --el-button-hover-text-color: white;
  --el-button-active-text-color: white;
  height: 46px;
}
</style>
