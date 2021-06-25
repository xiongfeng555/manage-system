<template>
  <div class="identify">
    <h1>商城管理系统</h1>
    <p>此管理系统还有很多待完善</p>
  </div>
</template>
<script>
export default {
  created() {
    this.setBreadCrumb()
  },
  methods: {
    setBreadCrumb() {
      this.$store.commit('setBreadCrumb', ['说明', '系统说明'])
    }
  }
}
</script>
<style lang="scss">

</style>
