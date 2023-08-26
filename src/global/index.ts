import type { App } from 'vue'

import registerElement from './register-element'
import registerElementIcon from './register-element-icon'

export default function registerApp(app: App): void {
  registerElement(app)
  registerElementIcon(app)
}
