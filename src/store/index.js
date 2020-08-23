import Vue from 'vue'
import Vuex from 'vuex'
import notifications from './modules/Notifications';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // notification in separate module
    notifications
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
})
