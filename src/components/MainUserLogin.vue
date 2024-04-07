<script setup>
import { ref, reactive } from 'vue';
import { defineModel } from 'vue';
import { GetUserInfo, GetUserDetails } from '@/api/user.js'
const dialogVisible = defineModel('dialogVisible')
const loginVisible = defineModel('loginVisible')
let imgSrc=defineModel('imgSrc')
const ruleFormRef = ref()
const ruleForm = ref({
    username: '',
    password: '',
})
const rules = reactive({
    username: [{ required: true, message: '账户名不为空', trigger: 'blur' }],
    password: [
        { min: 6, max: 18, message: '密码长度在6到18位', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9_]{6,18}$/, message: '密码只能包含数字字母下划线', trigger: 'blur' }],
})
const LoginFn = async () => {
    const res = await GetUserInfo(ruleForm.value)
    localStorage.setItem('token', res.data.data.token)
    localStorage.setItem('id', res.data.data.id)
}
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            dialogVisible.value = false
            loginVisible.value = false
            LoginFn()
            SetUserImg()
            formEl.resetFields()
        } else {
            console.log('error submit!')
            return false
        }
    })
}
const SetUserImg = async () => {
    const userId = localStorage.getItem('id')
    const userToken = localStorage.getItem('token')
    console.log(userId, userToken)
    const userPic = await GetUserDetails(userId, userToken)
    imgSrc.value=`http://49.232.134.192:8080/img/${userPic.data.userPic}`
}
</script>
<template>
    <el-form ref="ruleFormRef" :rules="rules" style="max-width: 600px;margin-top: 20px;padding-bottom: 0;"
        :model="ruleForm" status-icon label-width="auto" class="demo-ruleForm" label-position='right'
        hide-required-asterisk>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button style="width: 600px;height: 40px;" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped></style>
