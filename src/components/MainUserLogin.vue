<script setup>
import { ref, reactive } from 'vue';
import { defineModel } from 'vue';
import { GetUserInfo } from '@/utils/user'
const dialogVisible = defineModel('dialogVisible')
const loginVisible = defineModel('loginVisible')

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
const Loginfn = async () => {
    const res = await GetUserInfo(ruleForm.value)

    console.log(res)
}
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            dialogVisible.value = false
            loginVisible.value = false
            Loginfn()
        } else {
            console.log('error submit!')
            return false
        }
    })
}


</script>
<template>
    <el-form ref="ruleFormRef" :rules="rules" style="max-width: 600px;margin-top: 20px;padding-bottom: 0;"
        :model="ruleForm" status-icon label-width="auto" class="demo-ruleForm" label-position='right'
        hide-required-asterisk="true">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密　码" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button style="width: 600px;height: 40px;" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped></style>