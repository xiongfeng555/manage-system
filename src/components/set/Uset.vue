<template>
  <div class="uset">
    <h1>主题切换</h1>
    <el-switch
      v-model="value"
      active-text="夜间模式"
      inactive-text="白天模式"
      @change="change"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    }
  },
  created() {
    this.value = this.$store.state.darkTheme
    this.setBreadCrumb()
  },
  methods: {
    change() {
      this.$store.commit('changeTheme')
      console.log(this.$store.state.darkTheme)
      console.log(this.value)
    },
    setBreadCrumb() {
      this.$store.commit('setBreadCrumb', ['设置', '用户设置'])
    }
  }
}
</script>
<style lang="scss">

</style>
