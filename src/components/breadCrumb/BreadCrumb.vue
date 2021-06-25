<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="'/'">首页</el-breadcrumb-item>
      <transition-group v-if="!hasNoChild" name="breadcrumb">
        <el-breadcrumb-item v-for="bread in levelList" :key="bread.path">{{ bread.meta.title }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      levelList: null
    }
  },
  computed: {
    hasNoChild() {
      return this.levelList === []
    }
  },
  watch: {
    $route(route) {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadCrumb()
    }
  },
  created() {
    this.getBreadCrumb()
    console.log(this.levelList)
  },
  methods: {
    getBreadCrumb() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      if (matched[0].path === '' || !matched) {
        matched = []
      }
      this.levelList = matched
    }
  }
}
</script>
<style lang="scss" scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
