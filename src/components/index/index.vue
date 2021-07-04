<template>
  <div v-if="getLimit" id="main">

    <div slot="reference" class="git_bac" />
    <el-popover
      placement="left"
      width="150"
      trigger="hover"
      content="点击查看源码"
    >
      <span slot="reference" class="iconfont icon-github" @click="toGithub" />
    </el-popover>

    <div class="order_sum">
      <header>今日订单总金额</header>
      <div class="price_sum">4509834</div>
    </div>
    <div class="order_info">
      <div class="order_today">
        <header>今日成交订单</header>
        <div class="order_num">34220</div>
      </div>
      <div class="order_suc">
        <header>订单成功占比</header>
        <div class="order_num">93.25%</div>
      </div>
      <div class="order_cancel">
        <header>今日取消订单</header>
        <div class="order_num">2310</div>
      </div>
    </div>
    <div class="pie_echarts">
      <home-echart
        id="fac"
        style="width: 500px; height: 400px"
        :options="facOptions"
      />
      <home-echart
        id="age"
        style="width: 500px; height: 400px"
        :options="ageOptions"
      />
      <home-echart
        id="med"
        style="width: 500px; height: 400px"
        :options="medOptions"
      />
    </div>
    <div class="bar_echarts">
      <home-echart
        id="order_sort"
        style="width: 800px; height: 600px"
        :options="order_sort_options"
      />
      <home-echart
        id="time_number"
        style="width: 800px; height: 600px; margin-left: 100px"
        :options="time_number_options"
      />
    </div>
  </div>
  <div v-else class="nolimit">

    <span>对不起，普通用户没有权限</span>

  </div>
</template>

<script>
import HomeEchart from '@/components/echart/HomeEchart'

export default {
  components: {
    HomeEchart
  },
  data: function() {
    return {
      facOptions: {
        title: {
          text: '购买用户设备分布',
          left: 'center',
          top: '50%',
          textStyle: {
            color: 'rgb(50,197,233)',
            fontSize: 16,
            align: 'center'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '购买用户设备分布',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              // \n\n可让文字居于牵引线上方，很关键
              //  {b}  代表显示的内容标题
              // {c}代表数据
              formatter: ' {b}：{c} \n\n',
              color: '#fff',
              borderWidth: 20,
              borderRadius: 4,
              padding: [0, -70]

            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
                color: '#f6e122',
                overflow: 'break',
                formatter: '{b}\n  {c}'
              }
            },
            labelLine: {
              show: true,

              length: 20,
              length2: 70,
              lineStyle: {
                color: '#fff'
              }

            },
            data: [
              { value: 1048, name: '北京' },
              { value: 735, name: '广州' },
              { value: 580, name: '上海' },
              { value: 484, name: '深圳' },
              { value: 300, name: '杭州' }
            ]
          }
        ]
      },
      ageOptions: {
        title: {
          text: '用户年龄分布',
          left: 'center',
          top: '50%',
          textStyle: {
            color: '#817933',
            fontSize: 16,
            align: 'center'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '购买用户设备分布',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {

              // \n\n可让文字居于牵引线上方，很关键
              //  {b}  代表显示的内容标题
              // {c}代表数据
              formatter: ' {b}：{c} \n\n',
              color: '#fff',
              borderWidth: 20,
              borderRadius: 4,
              padding: [0, -70]

            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
                color: '#f6e122',
                overflow: 'break',
                formatter: '{b}\n  {c}'
              }
            },
            labelLine: {
              show: true,

              length: 20,
              length2: 70,
              lineStyle: {
                color: '#fff'
              }

            },
            data: [
              { value: 1048, name: '>70' },
              { value: 735, name: '60-70' },
              { value: 580, name: '50-60' },
              { value: 484, name: '40-50' },
              { value: 300, name: '30-40' },
              { value: 300, name: '20-30' },
              { value: 300, name: '>20' }
            ]
          }
        ]
      },
      medOptions: {
        title: {
          text: '本月用户购买渠道分布',
          left: 'center',
          top: '50%',
          textStyle: {
            color: '#e4dda2',
            fontSize: 16,
            align: 'center'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '购买用户设备分布',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {

              // \n\n可让文字居于牵引线上方，很关键
              //  {b}  代表显示的内容标题
              // {c}代表数据
              formatter: ' {b}：{c} \n\n',
              color: '#fff',
              borderWidth: 20,
              borderRadius: 4,
              padding: [0, -70]

            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
                color: '#f6e122',
                overflow: 'break',
                formatter: '{b}\n  {c}'
              }
            },
            labelLine: {
              show: true,

              length: 20,
              length2: 70,
              lineStyle: {
                color: '#fff'
              }

            },
            data: [
              { value: 6520, name: '线上' },
              { value: 3201, name: '线下' },
              { value: 128, name: '其他' }
            ]
          }
        ]
      },
      order_sort_options: {
        title: {
          show: true,
          text: '本月订单前TOP 10城市',
          left: 'center',
          top: 'top',
          textStyle: {
            color: '#fff'
          }
        },
        dataset: [{
          dimensions: ['name', 'score'],
          source: [
            [' Bei Jing ', 1534],
            [' Hang Zhou ', 996],
            [' Shang Hai ', 790],
            [' Shen Zhen ', 852],
            [' Jin Hua ', 332],
            [' Gui Yang ', 557],
            [' He Fei ', 666],
            [' Ning Bo ', 787],
            [' He Bei ', 654],
            [' An Hui ', 469]
          ]
        }, {
          transform: {
            type: 'sort',
            config: { dimension: 'score', order: 'desc' }
          }
        }],
        xAxis: {
          type: 'category',
          axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {},
        series: {
          type: 'bar',
          encode: { x: 'name', y: 'score' },
          datasetIndex: 1
        }
      },
      time_number_options: {
        title: {
          text: '订单量分时段统计',
          left: 'center',
          top: 'top',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
          name: '时间',
          nameLocation: 'end',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }]
      },
      authority: ''
    }
  },
  //   computed() {
  //     getLimit() {
  //      return this.authority === 'admin' ? true:false
  //     }
  //   }
  computed: {
    getLimit() {
      return this.authority === 'admin'
    }
  },
  created() {
    this.authority = this.$store.state.user.authority
    console.log(this.authority)
  },

  methods: {
    toGithub() {
      window.open('https://github.com/xiongfeng555/manage-system', '_blank')
    }
  }
}
</script>
<style lang="scss">

  </style>
