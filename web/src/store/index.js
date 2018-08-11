import Vue from 'vue'
import Vuex from 'vuex'

// 在modules文件夹里面创建文件后自动添加到store中 this.$store.state.XXXX
const modules = require.context('./modules', false, /.js$/)
let m = []
modules.keys().map(key => {
  m[key.replace(/(\.\/)|(\.js)/ig, '')] = modules(key).default
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ...m
  }
})

export default store
