import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

import registerApp from './global/index'

import 'normalize.css'
import '@/assets/css/index.less'

const app = createApp(App)

setupStore()
app.use(registerApp)
app.use(router)
app.use(store)

app.mount('#app')
