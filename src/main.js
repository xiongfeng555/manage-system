import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { mockXHR } from '@/mock/dataManage/index.js'
import '@/assets/css/iconfont/iconfont.css'
import { mockGoods } from '@/mock/goods/index.js'
import VueLazyload from 'vue-lazyload'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(VueLazyload)
mockXHR()
mockGoods()
console.log(process.env.NODE_ENV)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
