<template>
  <div>
    <el-form label-width="70px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="phonenum">
        <el-input v-model="phone.phonenum"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verification" class="verification">
        <div class="phonecode">
          <el-input v-model="phone.verification"></el-input>
          <el-button class="getVerification">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      phonenum: '',
      verification: ''
    })
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.phonecode {
  display: flex;
}
.getVerification {
  margin-left: 10px;
}
.verification {
  margin-top: 35px;
}
</style>
