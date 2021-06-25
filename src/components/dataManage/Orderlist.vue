<template>
  <div class="order">
    <el-table
      :data="dataShow"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.shopname }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.getAddress }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.shopAddress }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="订单 ID"
        prop="id"
      />
      <el-table-column
        label="总价格"
        prop="price"
      />
      <el-table-column
        label="订单状态"
        prop="status"
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
import { fetchOrderList } from '@/api/dataManage.js'
export default {
  data() {
    return {
      tableData: [{
        id: '12987122',
        price: 250,
        username: 'xlzzzz',
        shopAddress: '上海市普陀区真北路',
        getAddress: '杭州市余杭区良渚路',
        shopname: '王小虎夫妻店',
        shopId: '10333',
        status: '支付超时'
      }],
      totalPage: [], // 分组得到的数量
      pageSize: 12, // 每页的数量
      pageNum: 0, // 页数
      dataShow: [], // 当前显示的数据
      currentPage: 0, // 当前第几页
      dialogVisible: false
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
    this.getOrderList()
  },
  methods: {
    // 编辑食品列表项
    handleEdit(index, row) {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.edit.dataInit(row)
      })
    },
    // 删除食品列表项
    handleDelete(index, row) {
      this.tableData.forEach((item, dex) => {
        if (item.id === row.id) {
          this.tableData.splice(dex, 1)
        }
      })
      this.getCurrentPage()
    },
    // 根据页数的每页的数量分页
    getCurrentPage() {
      this.totalPage = []
      for (let i = 0; i < this.getPageLen; i++) {
        this.totalPage.push(this.tableData.slice(this.pageSize * i, this.pageSize * (i + 1)))
      }
      this.dataShow = this.totalPage[this.currentPage]
    },
    // 改变页码，替换列表
    changePage(page) {
      this.currentPage = page - 1
      this.dataShow = this.totalPage[this.currentPage]
    },
    // 点击×关闭编辑
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    confirm() {
      this.dialogVisible = false
    },
    getOrderList() {
      // axios.get('http://localhost:8080/mt/dataManage/orderlist').then(res => {
      //   this.tableData = res.data.data
      //   this.$store.commit('setList', { data: res.data.data, who: 'orderList' })
      //   this.$store.commit('setBreadCrumb', ['数据管理', '订单列表'])
      //   this.getCurrentPage()
      // })
      fetchOrderList().then(res => {
        this.tableData = res.data.data
        this.getCurrentPage()
      })
    }
    // 暂时无用
    // editData(data) {
    //   this.tableData.forEach((item, index) => {
    //     if (item.id === data.id) {
    //       for (var i in item) {
    //         item[i] = data[i]
    //       }
    //       return
    //     }
    //   })
    // }
  }
}
</script>
