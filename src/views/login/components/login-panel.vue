<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isRememberPassword" size="large">
        记住密码
      </el-checkbox>
      <el-link type="primary" :underline="false" @click="forgetPassword"
        >忘记密码</el-link
      >
    </div>
    <el-button type="primary" class="login-button" @click="handelLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import localCache from '@/utils/cache'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isRememberPassword = ref(false)
    const accountRef = ref()
    const handelLoginClick = () => {
      accountRef.value.loginAction(isRememberPassword)
    }
    const forgetPassword = () => {
      localCache.deleteCache('name')
      localCache.deleteCache('password')
    }
    return {
      isRememberPassword,
      handelLoginClick,
      accountRef,
      forgetPassword
    }
  }
})
</script>

<style lang="less">
.login-panel {
  width: 330px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login-button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
