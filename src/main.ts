import { createApp } from 'vue'
// 导入elementplus组件
import { globalRegister } from './global'
// 导入重置样式库
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入封装的axios库
// import ysaRequest from './service'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')
