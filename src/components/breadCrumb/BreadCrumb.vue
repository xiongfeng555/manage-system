<template>
  <div>
    <el-breadcrumb separator="/">
      <span v-if="!hasNoChild">
        <transition-group :key="$route.fullPath" name="breadcrumb">
          <el-breadcrumb-item v-for="bread in levelList" :key="bread.path">{{ bread.meta.title }}</el-breadcrumb-item>
        </transition-group>
      </span>
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
  },
  methods: {
    getBreadCrumb() {
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (first.meta.title !== '首页') {
        matched.unshift({ path: '/', meta: {
          title: '首页'
        }})
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
