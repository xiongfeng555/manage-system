<template>
  <div class="seller">
    <el-table
      :data="dataShow"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="食品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="食品ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商铺名称">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{ props.row.category }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="食品名称"
        prop="name"
      />
      <el-table-column
        label="食品介绍"
        prop="category"
      />
      <el-table-column
        label="详细描述"
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
        <Edit ref="edit" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Edit from '../edit/EditShop'
import { fetchFoodList } from '@/api/dataManage.js'
export default {
  components: {
    Edit
  },
  data: function() {
    return {
      tableData: [],
      totalPage: [], // 分组得到的数量
      pageSize: 10, // 每页的数量
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
    this.getFoodList()
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
          if (item.id === row.id) {
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
    handleClose() {
      this.dialogVisible = false
    },
    getFoodList() {
      // axios.get('http://localhost:8080/mt/dataManage/foodlist').then(res => {
      //   this.tableData = res.data.data
      //   this.$store.commit('setList', { data: res.data.data, who: 'foodList' })
      //   this.$store.commit('setBreadCrumb', ['数据管理', '食品列表'])
      //   this.getCurrentPage()
      // })
      fetchFoodList().then(res => {
        this.tableData = res.data.data
        this.getCurrentPage()
      })
    }
  }

}
</script>

