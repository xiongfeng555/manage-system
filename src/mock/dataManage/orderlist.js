
export default {
  url: 'http://localhost:8080/mt/dataManage/orderlist',
  method: 'get',
  response: () => ({
    'data|306': [
      {
        'id|+1': 0,
        'shopId|+1': 12345674,
        'price|30-1000': 30,
        'username': '@cname',
        'shopAddress': '@county(true)',
        'getAddress': '@county(true)',
        'status': '支付超时',
        'shopname': '王小虎夫妻店'
      }
    ]
  })
}
