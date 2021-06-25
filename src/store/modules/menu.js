export default {
  namespaced: true,
  state: () => ({
    minLeftMenuWidth: 51,
    maxLeftMenuWidth: 210,
    sliderbar: {
      opened: true,
      width: 210
    }
  }),
  getters: {
    sidebar: state => state.sliderbar,
    isCollapse: state => state.isCollapse
  },
  mutations: {
    // 收缩菜单
    handle_left_menu(state) {
      if (state.sliderbar.opened) {
        state.sliderbar.width = state.minLeftMenuWidth
      } else {
        state.sliderbar.width = state.maxLeftMenuWidth
      }
      state.sliderbar.opened = !state.sliderbar.opened
    }
  }

}
