<template>
  <div class="myEchart">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

export default {
  name: 'HelloWorld',
  components: {
    VChart
  },
  // provide: {
  //   [THEME_KEY]: 'dark'
  // },
  data() {
    return {
      option: {
        title: {
          text: '用户分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [
            '北京',
            '上海',
            '深圳',
            '杭州',
            '其他'
          ]
        },
        series: [
          {
            name: '用户分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '北京' },
              { value: 310, name: '上海' },
              { value: 234, name: '深圳' },
              { value: 135, name: '杭州' },
              { value: 1548, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>
