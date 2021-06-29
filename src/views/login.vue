<template>
  <div class="login">
    <div class="t-login">
      <h1>订单管理系统</h1>
      <div class="myform">

        <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="" prop="username">
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" placeholder="用户名" />
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" placeholder="密码" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="tip">
          <p>温馨提示：</p>
          <p>管理员用户名：admin,普通用户用户名：user</p>
          <p>密码大于6位任意字符</p>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'))
      }
      if (value === 'admin' || value === 'user') {
        callback()
      } else {
        callback(new Error('用户名不存在'))
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUser, trigger: 'blur' },
          { min: 2, max: 8, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击登录按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // vuex中保存下来
          this.$store.commit('user/setState', this.ruleForm, true)
          Cookies.set('isAuthenticated', 'true')
          Cookies.set('username', this.ruleForm.username)
          Cookies.set('password', this.ruleForm.password)
          // 跳转到首页
          this.$router.push({ path: '/' })
        } else {
          return false
        }
      })
    }
  }
}
</script>
