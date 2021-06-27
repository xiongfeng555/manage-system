<template>
  <div class="main-page" :class="$store.state.darkTheme?'dark-theme':''">
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#bfcbd9"
          active-text-color="#20a0ff"
          @open="handleOpen"
          @close="handleClose"
        >
          <router-link to="/home">
            <el-menu-item index="0">
              <i class="el-icon-menu" />
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document-remove" />
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/userlist">
                <el-menu-item index="1-1">用户列表</el-menu-item>
              </router-link>
              <router-link to="/home/sellerlist">
                <el-menu-item index="1-2">商家列表</el-menu-item>
              </router-link>
              <router-link to="/home/foodlist">
                <el-menu-item index="1-3">食品列表</el-menu-item>
              </router-link>
              <router-link to="/home/orderlist">
                <el-menu-item index="1-4">订单列表</el-menu-item>
              </router-link>
              <router-link to="/home/managerlist">
                <el-menu-item index="1-5">管理员列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus" />
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/addItem">
                <el-menu-item index="2-1">添加商品</el-menu-item>
              </router-link>
              <router-link to="/home/addshop">
                <el-menu-item index="2-2">添加商铺</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on" />
              <span>图表</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/around">
                <el-menu-item index="3-1">用户分布</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit" />
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/edit">
                <el-menu-item index="4-1">文本编辑</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-tools" />
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/mset">
                <el-menu-item index="5-1">管理员设置</el-menu-item>
              </router-link>
              <router-link to="/home/uset">
                <el-menu-item index="5-2">界面设置</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning-outline" />
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/des">
                <el-menu-item index="6-1">说明</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="24">
            <Header />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <router-view />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from '../../components/header/header'
export default {
  components: {
    Header
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handlePrint() {
      console.log('2')
    }
  }
}
</script>
<style lang="scss">

</style>
