
export default {
  url: 'http://localhost:8080/mt/dataManage/foodlist',
  method: 'get',
  response: () => ({
    'data|100': [
      {
        'id|+1': 12987120,
        'name': '好滋好味鸡蛋仔',
        'category': '浙江小吃、小吃零食',
        'address': '@county(true)',
        'desc': '"@ctitle(10)',
        'shop': '王小虎夫妻店',
        'shopId|+1': 12345
      }
    ]
  })
}
