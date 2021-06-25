<template>
  <div class="page-header">
    <span class="hamburger" @click="toggleMenu">
      <span class="iconfont icon-HAMBURGERMENU" />
    </span>
    <bread-crumb class="breadCrumb" />
    <span v-if="!isFull" class="screenfull" alt="全屏" @click="screenFull">
      <span class="iconfont icon-fullScreen" />
    </span>
    <span v-else class="screenfull" alt="退出全屏" @click="screenFull">
      <span class="iconfont icon-tuichuquanping1" />
    </span>
    <el-dropdown>
      <span class="el-dropdown-link">
        <img src="//elm.cangdu.org/img/default.jpg" alt="" class="avator">
      </span>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/">
          <el-dropdown-item
            icon="el-icon-s-home"
          >首页</el-dropdown-item></router-link>
        <el-dropdown-item
          v-if="isAuthenticated && username"
          icon="el-icon-user-solid"
        ><span @click="userInfo">{{ username }}</span></el-dropdown-item>
        <el-dropdown-item
          v-if="isAuthenticated"
          icon="el-icon-switch-button"
        ><span @click="exit">退出</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import BreadCrumb from '@/components/breadCrumb/BreadCrumb'
import screenfull from 'screenfull'
import Cookies from 'js-cookie'

export default {
  components: {
    BreadCrumb
  },
  data: function() {
    return {
      isFull: false,
      isAuthenticated: '',
      username: this.$store.state.user.username
    }
  },
  created() {
    this.isAuthenticated = Cookies.get('isAuthenticated')
  },
  methods: {
    screenFull() {
      if (!this.isFull) {
        if (screenfull.isEnabled) {
          screenfull.request()
        }
      } else {
        screenfull.exit()
      }
      this.isFull = !this.isFull
    },
    toggleMenu() {
      this.$store.commit('menu/handle_left_menu')
      console.log(this.$store.state.menu.sliderbar.width)
      console.log(this.$store.state.menu.sliderbar.opened)
    },
    // 修改用户信息
    userInfo() {
      this.$router.push({ path: '/setUserInfo' })
    },
    exit() {
      // 清空vuex里面的状态
      console.log('exit')
      this.$store.commit('user/clearState')
      // 移除cookies
      Cookies.remove('username')
      Cookies.remove('password')
      Cookies.remove('isAuthenticated')
      // 跳转到登录页
      this.$router.push({ path: '/login' })
      console.log('finish exit')
    }
  }
}
</script>
