<template>
  <div class="fruit_item">
    <div class="title">详细信息</div>
    <div class="fruit_info">
      <el-form ref="form" :model="fruit" label-width="80px">
        <el-form-item label="水果名称">
          <el-input v-model="fruit.name" disabled />
        </el-form-item>
        <el-form-item label="店铺地址">
          <el-input v-model="fruit.address" disabled />
        </el-form-item>
        <el-form-item label="店铺名称">
          <el-input v-model="fruit.shop" disabled />
        </el-form-item>
        <el-form-item label="店铺ID">
          <el-input v-model="fruit.id" disabled />
        </el-form-item>
        <el-form-item label="店铺介绍">
          <el-input v-model="fruit.desc" disabled />
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="fruit.telephone" disabled />
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      fruit: {}
    }
  },
  created() {
    this.getFruit()
  },
  beforeDestroy() {
    localStorage.removeItem('fruit')
  },
  methods: {
    getFruit() {
      const fruit = JSON.parse(localStorage.getItem('fruit')) || null
      if (fruit !== null) {
        this.fruit = fruit
      } else {
        this.fruit = this.$route.params.fruit
        localStorage.setItem('fruit', JSON.stringify(this.fruit))
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
