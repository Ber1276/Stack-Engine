<script setup>
import { ref, reactive } from 'vue'
import { GetUserInfo, GetUserDetails } from '@/api/user.js'
import { useUser } from '@/stores/modules/user.js'
import { ElMessage } from 'element-plus'

const UserStore = useUser()

const ruleFormRef = ref()
const ruleForm = ref({
  username: '',
  password: ''
})
const rules = reactive({
  username: [{ required: true, message: '账户名不为空', trigger: 'blur' }],
  password: [
    { min: 6, max: 18, message: '密码长度在6到18位', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_]{6,18}$/, message: '密码只能包含数字字母下划线', trigger: 'blur' }
  ]
})

const LoginFn = async (formEl) => {
  try {
    const res = await GetUserInfo(ruleForm.value)
    localStorage.setItem('token', res.data.data.token)
    localStorage.setItem('id', res.data.data.id)
    localStorage.setItem('username', res.data.data.username)
    formEl.resetFields()
    UserStore.token = res.data.data.token
    UserStore.userId = res.data.data.id
    UserStore.loginPopupVisible = false
    UserStore.isLogin = true
    ElMessage({ type: 'success', message: '登录成功' })
    await SetUserImg()
  } catch (err) {
    console.log(err.response.data.message)
    ElMessage({ type: 'error', message: err.response.data.message })
  }
}
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      LoginFn(formEl)
    } else {
      console.log('登录表单校验出错')
      return false
    }
  })
}
const SetUserImg = async () => {
  const userId = localStorage.getItem('id')
  const userToken = localStorage.getItem('token')
  const userPic = await GetUserDetails(userId, userToken)
  UserStore.userImg = `http://49.232.134.192:8080/img/${userPic.data.userPic}`
}
</script>
<template>
  <el-form
    ref="ruleFormRef"
    :rules="rules"
    :model="ruleForm"
    status-icon
    label-width="auto"
    class="demo-ruleForm pt-8 px-4"
    label-position="right"
    hide-required-asterisk
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button class="w-4/5 mx-auto" type="primary" @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>
<style scoped></style>
