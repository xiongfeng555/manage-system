<template>
  <div :id="id" />
</template>
<script>
import * as echarts from 'echarts'
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {

    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById(this.id))
    // 绘制图表
    myChart.setOption(this.options)
  }
}
</script>
<style lang="scss">

</style>
