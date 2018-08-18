export default {
  state: {
    controlList: []
  },
  mutations: {
    addControlList (state, control) {
      state.controlList.push(control)
    }
  }
}
