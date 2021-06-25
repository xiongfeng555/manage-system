<template>
  <div class="mset">
    <h2>暂未开放</h2>
  </div>
</template>
<script>
export default {
  created() {
    this.setBreadCrumb()
  },
  methods: {
    setBreadCrumb() {
      this.$store.commit('setBreadCrumb', ['设置', '管理员设置'])
    }
  }
}
</script>
<style lang="scss">

</style>
