<template>
  <div id="coderYsa">
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-cascader />
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less"></style>
