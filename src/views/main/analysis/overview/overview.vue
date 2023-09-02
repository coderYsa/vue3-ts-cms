<template>
  <div class="overview">
    <ysa-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </ysa-card>
    <ysa-card title="技术栈">
      <ysa-text-link :text-arrs="technologyStacks" />
    </ysa-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import YsaTextLink from '@/base-ui/text-link'
import YsaCard from '@/base-ui/card'

import { technologyStacks } from './config'
export default defineComponent({
  components: {
    YsaCard,
    YsaTextLink
  },

  setup() {
    return {
      technologyStacks
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
</style>
