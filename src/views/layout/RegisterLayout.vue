<script setup>
import { reactive, ref } from 'vue'
import { RegisterPost } from '@/api/user.js'
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
        const res = await RegisterPost(registerDetails.value)
        console.log(res.data.data)
        formEl.resetFields()
      } catch (error) {
        alert(error.response.data.message)
      } finally {
        console.log('请求结束')
      }
    } else {
      alert('表单校验出错')
      return false
    }
  })
}
</script>

<template>
  <div class="hero min-h-screen bg-primary">
    <div class="hero-content flex-col lg:flex-row">
      <div class="text-center lg:text-left min-w-96 text-green-50">
        <h1 class="text-5xl font-bold">Register now!</h1>
        <p class="py-6">在这里， 创造属于您的代码故事</p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-white">
        <el-form ref="ruleFormRef" class="card-body" :model="registerDetails" :rules="rules">
          <el-form-item class="form-control" prop="username">
            <el-input
              v-model="registerDetails.username"
              size="large"
              type="text"
              placeholder="username"
              class="bg-white w-full my-2.5"
            />
          </el-form-item>
          <el-form-item class="form-control" prop="password">
            <el-input
              v-model="registerDetails.password"
              type="password"
              size="large"
              placeholder="password"
              class="bg-white w-full"
            />
          </el-form-item>
          <el-form-item class="form-control mt-6">
            <el-button class="register-button w-full" @click="RegisterFn(ruleFormRef)">
              Register
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-button {
  --el-button-bg-color: #7480ff;
  --el-button-active-bg-color: #7480ff;
  --el-button-hover-bg-color: #7480ff;
  --el-button-text-color: white;
  --el-button-hover-text-color: white;
  --el-button-active-text-color: white;
  height: 46px;
}
</style>
