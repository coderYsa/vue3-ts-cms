import type { App } from 'vue'

import { ElButton } from 'element-plus'

const elementComponents = [ElButton]

// 按需引入element(旧版按需方式，新版只需安装插件)
export default function registerElement(app: App): void {
  for (const elementComponent of elementComponents) {
    app.component(elementComponent.name, elementComponent)
  }
}
