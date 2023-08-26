// 这里是导入了所有的也可按需导入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import type { App } from 'vue'

export default function registerElementIcon(app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
