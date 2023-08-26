<template>
  <div id="coderYsa">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less">
#coderYsa {
  height: 100%;
}
</style>
