<template>
  <div class="page-search">
    <ysa-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button @click="handleQueryClick" type="primary">搜索</el-button>
        </div>
      </template>
    </ysa-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import YsaForm from '@/base-ui/form/index'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  components: {
    YsaForm
  },
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    // 创建一个对象，对象的key由配置中的field决定
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 当用户点击重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.page-search {
  background-color: white;
}
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
