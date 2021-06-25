<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-openeds="['/dataManage']"
      default-active="2"
      :collapse="isCollapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      mode="vertical"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
    >
      <Slider v-for="route in $store.state.permission_route" :key="route.path" :route="route" :path="route.path" />
    </el-menu>
  </el-scrollbar>

</template>
<script>
import Slider from './Slider.vue'
export default {
  components: {
    Slider
  },
  computed: {
    isCollapse() {
      return !this.$store.state.menu.sliderbar.opened
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
