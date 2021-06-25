<template>
  <div class="addshop">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="店铺名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="ruleForm.address" />
      </el-form-item>
      <el-form-item label="联系电话" prop="telephone">
        <el-input v-model="ruleForm.telephone" />
      </el-form-item>
      <el-form-item label="店铺简介" prop="shopIntro">
        <el-input v-model="ruleForm.shopIntro" />
      </el-form-item>
      <el-form-item label="店铺分类" prop="shopType">
        <el-select v-model="ruleForm.shopType" placeholder="请选择店铺类别" />
      </el-form-item>
      <el-form-item label="外卖配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="店铺特点" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="品牌保证" name="type" />
          <el-checkbox label="新开店铺" name="type" />
          <el-checkbox label="准时达" name="type" />
          <el-checkbox label="开发票" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="配送费" prop="deliveryPrice">
        <el-input-number v-model="ruleForm.deliveryPrice" :min="1" :max="50" label="配送费" @change="handleChange" />
      </el-form-item>
      <el-form-item label="起送价" prop="beginPrice">
        <el-input-number v-model="ruleForm.beginPrice" :min="1" :max="50" label="起送价" />
      </el-form-item>
      <el-form-item label="营业时间" prop="time">
        <el-time-picker
          v-model="ruleForm.beginTime"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点"
        />
        <el-time-picker
          v-model="ruleForm.lastTime"
          arrow-control
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '', // 店铺名称
        delivery: false, // 是否外卖配送
        type: [], // 店铺特点
        address: '', // 店铺地址
        telephone: '', // 联系电话
        shopIntro: '', // 店铺简介
        shopType: '', // 店铺分类
        deliveryPrice: 1, // 配送费
        beginPrice: 10, // 起送费
        beginTime: '', // 起始时间
        lastTime: ''// 结束时间
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入详细地址', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个店铺特点', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.setBreadCrumb()
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    handleChange(value) {
      console.log(value)
    },
    setBreadCrumb() {
      this.$store.commit('setBreadCrumb', ['添加数据', '添加商铺'])
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
