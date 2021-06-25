<template>
  <div />
</template>
<script>
export default {
  beforeCreate() {
    const path = this.$route.params.path
    this.$router.replace({
      path: '/' + path
    })
  }
}
</script>
