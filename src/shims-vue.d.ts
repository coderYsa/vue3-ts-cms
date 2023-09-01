/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare const $filters: any
declare let $store: any
declare module 'element-plus/dist/locale/zh-cn.mjs';
declare module '*.json';
