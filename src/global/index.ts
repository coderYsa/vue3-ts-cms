import type { App } from 'vue'

import registerElement from './register-element'
import registerElementIcon from './register-element-icon'
import registerProperties from './register-properties'

export default function registerApp(app: App): void {
  registerElement(app)
  registerElementIcon(app)
  registerProperties(app)
}
