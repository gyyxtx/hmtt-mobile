import Vue from 'vue'
import Vuex from 'vuex'
// *为通配符，是导入所有方法
import * as auth from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初始化的时候从本地存储获取数据，防止刷丢失token
    user: auth.getToken()
  },
  mutations: {
    // 登录成功，调用mutation更新容器中的user的状态
    setUser (state, data) {
      // 修改state
      state.user = data
      // 将数据放在本地存储
      auth.setToken(state.user)
    }
  },
  actions: {

  }
})
