
export default {
  url: 'http://localhost:8080/mt/dataManage/sellerlist',
  method: 'get',
  response: () => ({
    'data|100': [
      {
        'shopId|+1': 1201580,
        'name': '好滋好味鸡蛋仔',
        'address': '@county(true)',
        'desc': '"@ctitle(10)',
        'shop': '王小虎夫妻店',
        'intro': '荷兰优质淡奶，奶香浓而不腻',
        'telephone': /^1(5|3|7|8)[0-9]{9}$/,
        'rate|0-5': 1,
        'sellNumber|1000-5000': 1000,
        'type': '快餐便当/简食'
      }
    ]
  })
}
