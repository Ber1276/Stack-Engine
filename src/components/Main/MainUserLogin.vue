<script setup>
//导入
import router from '@/router'
import { ref, reactive, defineEmits } from 'vue'
import { GetUserInfo, GetUserDetails } from '@/api/user.js'
import { useUser } from '@/stores/modules/user.js'
import { ElMessage } from 'element-plus'

const UserStore = useUser()
//子组件触发事件
const emit = defineEmits(['close-popup'])
const closePop = () => {
  emit('close-popup')
  location.reload()
}


//表单校验
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
//登录保存信息关闭弹窗
const submitForm = (formEl) => {
  formEl.validate((valid) => {
    if (valid) {
      LoginFn(formEl)
    } else {
      ElMessage({ type: 'error', message: '表单校验出错' })
      return false
    }
  })
}
const LoginFn = async (formEl) => {
  try {
    //保存用户信息
    const result = await GetUserInfo(ruleForm.value)
    const res = result.data.data
    localStorage.setItem('token', res.token)
    ElMessage({ type: 'success', message: '登录成功' })
    UserStore.token = res.token
    UserStore.userId = res.id
    UserStore.userName = res.username
    UserStore.isLogin = true
    const userPic = await GetUserDetails(res.id, res.token)
    UserStore.userImg = `http://49.232.134.192:8080/img/${userPic.userPic}`
    formEl.resetFields()
    closePop()
  } catch (err) {
    ElMessage({ type: 'error', message: err.data })
  }
}
</script>
<template>
  <el-form ref="ruleFormRef" :rules="rules" :model="ruleForm" status-icon label-width="auto"
    class="demo-ruleForm pt-8 px-4" label-position="right" hide-required-asterisk>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button class="w-4/5 mx-auto" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
  </el-form>
  <div class="flex flex-col text-center">

    <p>没有账号？<el-button @click="router.push('/register')">注册</el-button></p>

  </div>
</template>
<style scoped></style>
