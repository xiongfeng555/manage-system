<template>
  <div class="seller">
    <el-table
      :data="dataShow"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="店铺介绍">
              <span>{{ props.row.intro }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.telephone }}</span>
            </el-form-item>
            <el-form-item label="商铺ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="评分">
              <span>{{ props.row.rate }}</span>
            </el-form-item>
            <el-form-item label="销售量">
              <span>{{ props.row.sellNumber }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.type }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="店铺名称"
        prop="name"
      />
      <el-table-column
        label="商品地址"
        prop="address"
      />
      <el-table-column
        label="店铺介绍"
        prop="desc"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-pagination">
      <span>共{{ getPageSum }}条数据</span>
      <el-pagination
        layout="prev, pager, next"
        :total="getPageSum"
        @current-change="changePage"
      />
      <el-dialog
        title="修改食品信息"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <EditShop ref="edit" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import EditShop from '../edit/EditShop'
import { fetchSellerList } from '@/api/dataManage.js'
export default {
  components: {
    EditShop
  },
  data: function() {
    return {
      tableData: [],
      totalPage: [], // 分组得到的数量
      pageSize: 12, // 每页的数量
      pageNum: 0, // 页数
      dataShow: [], // 当前显示的数据
      currentPage: 0, // 当前第几页,
      dialogVisible: false,
      authority: ''
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
    this.getSellerList()
    this.authority = this.$store.state.user.authority
  },
  methods: {
    // 根据页数的每页的数量分页
    getCurrentPage() {
      this.totalPage = []
      for (let i = 0; i < this.getPageLen; i++) {
        this.totalPage.push(this.tableData.slice(this.pageSize * i, this.pageSize * (i + 1)))
      }
      this.dataShow = this.totalPage[this.currentPage]
    },
    changePage(page) {
      this.currentPage = page - 1
      this.dataShow = this.totalPage[this.currentPage]
    },
    // 编辑食品列表项
    handleEdit(index, row) {
      if (this.authority === 'admin') {
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs.edit.dataInit(row)
        })
      } else {
        this.$message({
          message: '您没有该功能的权限',
          type: 'warning'
        })
      }
    },
    // 删除食品列表项
    handleDelete(index, row) {
      if (this.authority === 'admin') {
        this.tableData.forEach((item, dex) => {
          if (item.shopId === row.shopId) {
            this.tableData.splice(dex, 1)
          }
        })
        this.getCurrentPage()
      } else {
        this.$message({
          message: '您没有该功能的权限',
          type: 'warning'
        })
      }
    },
    confirm() {
      this.dialogVisible = false
    },
    handleClose() {},
    getSellerList() {
      // axios.get('http://localhost:8080/mt/dataManage/sellerlist').then(res => {
      //   this.tableData = res.data.data
      //   this.$store.commit('setList', { data: res.data.data, who: 'sellerList' })
      //   this.$store.commit('setBreadCrumb', ['数据管理', '商家列表'])
      //   this.getCurrentPage()
      // })
      fetchSellerList().then(res => {
        this.tableData = res.data.data
        this.getCurrentPage()
      })
    }
  }
}
</script>

