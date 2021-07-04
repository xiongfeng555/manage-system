const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  },
  chainWebpack: config => {
    config.optimization.minimize(true)// 进行代码压缩
    config.externals({
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
      'axios': 'axios',
      // 'element-ui': 'ELEMENT',
      'echarts': 'echarts',
      'wangEditor': 'wangEditor'
    //   swiper: 'swiper'
    })
  }
}
