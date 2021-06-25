<template>
  <div>
    <el-form ref="form" :model="food" label-width="80px">
      <el-form-item label="食品名称">
        <el-input v-model="food.name" />
      </el-form-item>
      <el-form-item label="食品介绍">
        <el-input v-model="food.desc" />
      </el-form-item>
      <el-form-item label="食品分类">
        <el-select v-model="food.type" placeholder="请选择">
          <el-option :label="food.category" value="shanghai" />
        </el-select></el-form-item>
      <el-form-item label="食品所属">
        <el-input v-model="food.address" />
      </el-form-item>
      <el-table
        :data="tableData"
        height="120"
        style="width: 90%;margin:25px;"
      >
        <el-table-column
          prop="size"
          label="规格"
          width="180"
        />
        <el-table-column
          prop="bprice"
          label="包装费"
          width="180"
        />
        <el-table-column
          prop="price"
          label="价格"
          width="190"
        />
        <el-table-column
          prop="action"
          label="操作"
        />
      </el-table>
      <div class="addType">
        <el-button type="primary">添加规格</el-button>
      </div>

    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      food: {
        id: '',
        name: '',
        desc: '', // 商品介绍
        type: '',
        address: '',
        category: ''
      },
      tableData: []
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    dataInit(data) {
      if (data) {
        this.food = data
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
