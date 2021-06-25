<template>
  <div v-if="user.isAuthenticated" class="setUserInfo">
    <div class="userInfo">
      <div class="info">
        <el-form ref="form" :model="user" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="user.username" />
          </el-form-item>
          <el-form ref="form" :model="user" label-width="80px">
            <el-form-item label="年龄">
              <el-input-number v-model="user.age" controls-position="right" :min="1" :max="10" />
            </el-form-item>
            <el-form-item label="性别">
              <el-radio v-model="user.gender" label="male">男</el-radio>
              <el-radio v-model="user.gender" label="female">女</el-radio>
            </el-form-item>
            <el-form-item label="权限">
              <span>{{ user.authority }}</span>
            </el-form-item>
            <el-form-item label="个性签名" prop="desc">
              <el-input v-model="user.desc" href="个性签名" maxlength="80" /></el-form-item>
            <el-form-item>
              <el-button type="success" @click="save">保存</el-button>
            </el-form-item>
          </el-form>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      user: {
        username: '',
        age: '',
        gender: '',
        authority: '',
        desc: '',
        isAuthenticated: ''
      }
    }
  },
  created() {
    this.user.isAuthenticated = Cookies.get('isAuthenticated')
    this.initInfo()
  },
  methods: {
    save() {
      this.$store.commit('user/setNewState', this.user)
      this.$message({
        message: '保存成功',
        type: 'success',
        showClose: true
      })
    },
    initInfo() {
      for (const arr in this.$store.state.user) {
        if (arr !== 'password') {
          this.user[arr] = this.$store.state.user[arr]
        }
      }
    }
  }
}
</script>
<style lang="scss">
    .setUserInfo{
        height: 100%;
    }
</style>
