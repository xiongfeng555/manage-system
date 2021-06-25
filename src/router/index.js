import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/index.vue'
import Login from '../views/login.vue'
import layout from '@/layout/index.vue'
import Cookies from 'js-cookie'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  },
  {
    path: '/',
    component: layout,
    meta: {
      title: '首页',
      icon: 'el-icon-menu'
    },
    children: [
      {
        path: '/',
        component: Index
      }
    ]
  },
  {
    path: '/dataManage',
    component: layout,

    meta: {
      title: '数据管理',
      icon: 'el-icon-document-remove'
    },
    children: [
      {
        path: 'userlist',
        name: 'userlist',
        component: () => import('@/components/dataManage/Userlist.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'sellerlist',

        component: () => import('@/components/dataManage/Sellerlist.vue'),
        meta: {
          title: '商家管理'
        }
      },
      {
        path: 'foodlist',
        component: () => import('@/components/dataManage/Foodlist.vue'),
        meta: {
          title: '食品列表'
        }
      },
      {
        path: 'orderlist',
        component: () => import('@/components/dataManage/Orderlist.vue'),
        meta: {
          title: '订单列表'
        }
      },
      {
        path: 'managerlist',
        component: () => import('@/components/dataManage/managerlist.vue'),
        meta: {
          title: '管理员列表'
        }
      }

    ]
  },
  {
    path: '/add',
    component: layout,

    meta: {
      title: '添加数据',
      icon: 'el-icon-plus'
    },
    children: [
      {
        path: 'addshop',
        component: () => import('@/components/add/addshop.vue'),
        meta: {
          title: '添加商品'
        }
      },
      {
        path: 'addItem',
        component: () => import('@/components/add/addfood.vue'),
        meta: {
          title: '添加商铺'
        }
      }
    ]
  },
  {
    path: '/around',
    component: layout,

    meta: {
      title: '图表',
      icon: 'el-icon-star-on'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/components/echart/myechart.vue'),
        meta: {
          title: '用户分布'
        }
      }
    ]
  },
  {
    path: '/edit',
    component: layout,

    meta: {
      title: '编辑',
      icon: 'el-icon-edit'
    },
    children: [
      {
        path: 'textEdit',
        component: () => import('@/components/edit/EditText.vue'),
        meta: {
          title: '文本编辑'
        }
      }
    ]
  },
  {
    path: '/set',
    component: layout,

    meta: {
      title: '设置',
      icon: 'el-icon-s-tools'
    },
    children: [
      {
        path: 'uset',
        component: () => import('@/components/set/Uset.vue'),
        meta: {
          title: '用户设置'
        }
      },
      {
        path: 'mset',
        component: () => import('@/components/set/Mset.vue'),
        meta: {
          title: '管理员设置'
        }
      }
    ]
  },
  {
    path: '/des',
    component: layout,

    meta: {
      title: '说明',
      icon: 'el-icon-warning-outline'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/components/identify/identify.vue'),
        meta: {
          title: '系统说明'
        }
      }
    ]
  },
  {
    path: '/setUserInfo',
    component: layout,
    meta: {
      title: '设置用户信息'
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/user/user.vue')
      }
    ],
    hidden: true
  },
  {
    path: '/redirect',
    component: layout,

    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/components/redirect/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookies.get('isAuthenticated') // 生命写在路由拦截里
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})
export default router
