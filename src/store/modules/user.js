import Cookies from 'js-cookie'
const username = Cookies.get('username')
const password = Cookies.get('password')
const isAuthenticated = Cookies.get('isAuthenticated')
export default {
  namespaced: true,
  state: () => ({
    username: username || '',
    password: password || '',
    isAuthenticated: isAuthenticated || false,
    age: 0,
    gender: 'male',
    authority: '',
    desc: ''
  }),
  mutations: {
    setState: (state, user, bool) => {
      state.isAuthenticated = bool
      state.username = user.username
      state.password = user.password
      state.authority = user.username
      state.desc = '用户很懒，什么都没有写'
    },
    clearState: state => {
      state.username = ''
      state.password = ''
      state.isAuthenticated = false
      state.gender = 'male'
      state.authority = ''
      state.desc = ''
      state.age = 0
    },
    setNewState: (state, user) => {
      for (const arr in state) {
        state[arr] = user[arr]
      }
    }
  },
  getters: {
    getUsername: state => {
      return state.username ? state.username : false
    }
  }
}
