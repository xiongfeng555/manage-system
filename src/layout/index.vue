<template>
  <div class="main-page" :class="$store.state.darkTheme?'dark-theme':''">

    <SliderBar class="sliderBar" :style="{width:getWidth+'px'}" />
    <el-scrollbar wrap-class="scroll_main">
      <div class="main-container">
        <Header />
        <router-view />
      </div>

    </el-scrollbar>

  </div>
</template>
<script>
import Header from '@/components/header/header'
import SliderBar from './components/sliderBar/index.vue'
import router from '@/router/index'
export default {
  components: {
    Header,
    SliderBar
  },
  computed: {
    key() {
      return new Date().getTime()
    },
    getWidth() {
      return this.$store.state.menu.sliderbar.width
    }
  },
  created() {
    this.$store.commit('getRouter', router.options.routes)
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

