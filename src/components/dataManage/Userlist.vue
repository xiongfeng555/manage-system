<template>
  <div class="user">
    <el-table
      :data="dataShow"
      stripe
      style="width: 90%;margin:5px auto"
    >
      <el-table-column
        prop="date"
        label="编号"
        width="180"
      />
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="date"
        label="注册日期"
      />
      <el-table-column
        prop="address"
        label="注册地址"
      />
    </el-table>

    <div class="page-pagination">
      <span>共{{ getPageSum }}条数据</span>
      <el-pagination
        layout="prev, pager, next"
        :total="getPageSum"
        @current-change="changePage"
      />

    </div>

  </div>
</template>
<script>
import { fetchUserList } from '@/api/dataManage.js'
export default {
  data: function() {
    return {
      tableData: [],
      totalPage: [], // 分组得到的数量
      pageSize: 12, // 每页的数量
      pageNum: 0, // 页数
      dataShow: [], // 当前显示的数据
      currentPage: 0// 当前第几页
    }
  },
  computed: {
    getPageLen() {
      return Math.ceil(this.tableData.length / this.pageSize)
    },
    getPageSum() {
      return this.tableData.length
    }
  },
  created() {
    this.getUserList()
    console.log(this.$route)
  },
  methods: {
    // 根据页数的每页的数量分页
    getCurrentPage() {
      for (let i = 0; i < this.getPageLen; i++) {
        this.totalPage.push(this.tableData.slice(this.pageSize * i, this.pageSize * (i + 1)))
      }
      this.dataShow = this.totalPage[this.currentPage]
    },
    changePage(page) {
      this.currentPage = page - 1
      this.dataShow = this.totalPage[this.currentPage]
    },
    getUserList() {
      // axios.get('http://localhost:8080/mt/dataManage/userlist').then(res => {
      //   this.tableData = res.data.data
      //   // 把数据传一份给vuex保存
      //   this.$store.commit('setList', { data: res.data.data, who: 'userList' })
      //   this.$store.commit('setBreadCrumb', ['数据管理', '用户列表'])
      //   this.getCurrentPage()
      // })
      fetchUserList().then(res => {
        this.tableData = res.data.data
        this.getCurrentPage()
      })
    }
  }
}
</script>
