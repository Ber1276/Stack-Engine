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
    <div class="illustration">
      <img src="/src/assets/img/register.svg" alt="logo">
    </div>
    <div class="register-form">
      <el-form ref="ruleFormRef" class="form" :model="registerDetails" :rules="rules">
        <h2>开始你的成长之旅</h2>
        <el-form-item class="form-control" prop="username">
          <el-input v-model="registerDetails.username" size="large" type="text" placeholder="username" class="" />
        </el-form-item>
        <el-form-item class="form-control" prop="password">
          <el-input v-model="registerDetails.password" type="password" size="large" placeholder="password" class="" />
        </el-form-item>
        <el-form-item class="form-control">
          <el-button class="register-button" @click="RegisterFn(ruleFormRef)">
            Register
          </el-button>
        </el-form-item>
      </el-form>
    </div>

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

.form-container {
  background-color: #472FDB;
  padding: 140px 280px;
  display: flex;
  font-family: Arial, sans-serif;
  height: 100vh;
}

.illustration {
  flex: 1;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #472FDB;

  img {
    width: 464px;
    height: 480px;
    object-fit: cover;
  }
}

.register-form {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  flex: 1;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;

  .form {
    border-radius: 10px;
    height: 60%;
    margin: 0 40px;
    background-color: #fff;
  }
}

h2 {
  color: #333;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.sign-in-button {
  width: 100%;
  padding: 0.5rem;
  background-color: #3949AB;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.help-link {
  text-align: right;
  margin-top: 0.5rem;
}

.create-account {
  margin-top: 2rem;
  text-align: center;
}

a {
  color: #3949AB;
  text-decoration: none;
}
</style>
