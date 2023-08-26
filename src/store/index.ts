import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

// 刷新后从缓存获取用户信息和token
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
