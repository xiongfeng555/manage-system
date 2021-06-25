export default {
  setList(state, { data, who }) {
    state[who] = data
  },
  changeTheme(state) {
    state.darkTheme = !state.darkTheme
  },
  // 设置面包屑
  setBreadCrumb(state, arr) {
    state.breadCrumb = arr
  },
  // 过去路由信息
  getRouter(state, router) {
    state.permission_route = router
  }
}
