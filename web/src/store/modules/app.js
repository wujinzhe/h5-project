export default {
  state: {
    name: 'name'
  },
  mutations: {
    setName (state, name) {
      console.log('ddd')
      state.name = name
    }
  }
}
