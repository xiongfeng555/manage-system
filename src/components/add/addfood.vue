<template>
  <div class="addfood">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="食品名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="食品活动" prop="activity">
        <el-input v-model="ruleForm.activity" />
      </el-form-item>
      <el-form-item label="食品详情" prop="detail">
        <el-input v-model="ruleForm.detail" />
      </el-form-item>
      <el-form-item label="食品种类">
        <el-select v-model="ruleForm.foodType" placeholder="请选择食品种类">
          <el-option label="肉类" value="meat" />
          <el-option label="蛋类" value="eggs" />
          <el-option label="蔬菜" value="veg" />
          <el-option label="水果" value="fruits" />
        </el-select>
      </el-form-item>
      <el-form-item label="食品规格" prop="foodSize">
        <el-checkbox-group v-model="ruleForm.foodSize">
          <el-checkbox label="单规格" name="single" />
          <el-checkbox label="多规格" name="double" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="上传食品图片" prop="foodPic">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="包装费" prop="blockPrice">
        <el-input-number v-model="ruleForm.blockPrice" :min="1" :max="50" label="配送费" @change="handleChange" />
      </el-form-item>
      <el-form-item label="价格" prop="foodPrice">
        <el-input-number v-model="ruleForm.foodPrice" :min="1" :max="50" label="起送价" />
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
        name: '', // 食品名称
        blockPrice: 5, // 包装费
        foodPrice: 35, // 价格
        foodSize: [],
        foodType: [],
        detail: '',
        activity: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入食品名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false
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
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    setBreadCrumb() {
      this.$store.commit('setBreadCrumb', ['添加数据', '添加商品'])
    }
  }
}
</script>

