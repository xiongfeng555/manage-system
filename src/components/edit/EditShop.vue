<template>
  <div>
    <el-form ref="form" :model="shop" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="shop.name" />
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="shop.address" />
      </el-form-item>
      <el-form-item label="店铺介绍">
        <el-input v-model="shop.intro" />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="shop.telephone" />
      </el-form-item>
      <el-form-item label="食品分类">
        <el-select v-model="shop.type" placeholder="请选择">
          <el-option label="异国料理" value="shanghai" />
          <el-option label="快餐便当" value="shanghai" />
        </el-select></el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shop: {
        id: '',
        name: '',
        desc: '', // 商品介绍
        type: '',
        address: '',
        category: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    dataInit(data) {
      if (data) {
        this.shop = data
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
