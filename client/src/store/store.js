import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      state.isUserLoggedIn = (token !== null)
    },
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    },
  },
})
