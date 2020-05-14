import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user.module'
import productModule from './modules/product.module'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule: userModule,
    productModule: productModule
  }
})
