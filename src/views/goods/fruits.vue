<template>
  <div class="fruits_container">
    <el-backtop target=".fruits_container" :bottom="100" :right="20">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        <span class="iconfont icon-huidaodingbu" />
      </div>
    </el-backtop>
    <div class="search_container">
      <div class="search">
        <el-input
          v-model="input"
          placeholder="请输入内容"
          clearable
        />
        <el-button type="primary">筛选</el-button>
      </div>
    </div>
    <div class="fruits">
      <div v-for="item in getFruitList" :key="item.id" class="fruits_card">
        <el-card :body-style="{ padding: '0px'}">
          <img v-lazy="item.image" class="image">
          <div style="padding: 14px 14px 0 14px;" class="fruits-dec">
            <span class="title">{{ item.name }}</span>
            <div class="bottom clearfix">
              <span class="location">产地：{{ item.address }}</span>
              <span class="price">{{ item.price }}￥/KG</span>
              <span class="time"><span>营业时间:</span>{{ item.time }}</span>
              <el-button type="text" class="button" @click="toFruitItem(item.id,item)">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </div>

    </div>

  </div>
</template>
<script>

import { fetchFruitsList } from '@/api/goods.js'
export default {
  data() {
    return {
      fruitsList: [],
      input: '',
      list: []
    }
  },
  computed: {
    getFruitList() {
      var list = this.fruitsList
      if (this.input === '') {
        return list
      }
      list = list.filter(item => {
        if (item.address.indexOf(this.input) > -1 || item.name.indexOf(this.input) > -1 || item.price.toString().indexOf(this.input) > -1 || item.address.indexOf(this.input) > -1 || item.shop.indexOf(this.input) > -1) {
          return true
        } else {
          return false
        }
      })
      return list
    }
  },
  created() {
    fetchFruitsList().then(res => {
      var data = res.data.data
      this.list = res.data.data
      console.log(res.data.data)
      data.forEach(item => {
        item.address = item.address.split(' ').slice(0, 1).join(' ')
      })
      this.fruitsList = data
    })
  },
  methods: {
    // change() {
    //   var value = this.input
    //   var list = this.fruitsList
    //   if (value === '') {
    //     this.list = this.fruitsList
    //   } else {
    //     list = list.filter(item => {
    //       if (item.address.indexOf(this.input) > -1 || item.name.indexOf(this.input) > -1 || item.price.toString().indexOf(this.input) > -1 || item.address.indexOf(this.input) > -1 || item.shop.indexOf(this.input) > -1) {
    //         console.log(item.address.indexOf(this.input))
    //         return true
    //       } else {
    //         return false
    //       }
    //     })
    //     this.list = list
    //   }
    // }
    toFruitItem(id, good) {
      const list = this.list.filter(item => {
        return item.id === good.id
      })
      console.log(this.list)
      console.log(list)
      this.$router.push({ name: `fruitsItem`, params: { fruit: list[0] }, query: { id: id }})
    }
  }
}
</script>
