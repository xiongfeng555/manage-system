import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import mutations from './mutations'
import menu from './modules/menu.js'
import user from './modules/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [],
    sellerList: [],
    foodList: [],
    orderList: [],
    managerList: [],
    darkTheme: false,
    breadCrumb: [],
    permission_route: []
  },
  modules: {
    menu,
    user
  },
  actions,
  mutations
})
