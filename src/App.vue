<template>
  <div id="coderYsa">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default defineComponent({
  name: 'App',
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less">
#coderYsa {
  height: 100%;
}
</style>
