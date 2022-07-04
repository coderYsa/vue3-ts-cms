import { App } from 'vue'
import registerEelement from './register-element'

export function globalRegister(app: App): void {
  app.use(registerEelement)
}
