import Mock from 'mockjs'
var Random = Mock.Random
Random.extend({
  fruit() {
    const fruit = ['苹果', '香蕉', '菠萝', '小番茄', '火龙果', '大黄梨', '西瓜', '油桃', '猕猴桃', '橘子']
    return this.pick(fruit)
  },
  shop() {
    const shop = ['西湖水果店', '黑河水果店', '峰格水果店', '烟台瓜果批发', '花样甘草水果店', '沃艾果', '沐园春', '天然果棚', '果仙流', '果町', '康美绿', '丰收果园', '贝多多果行']
    return this.pick(shop)
  },
  fruitImg() {
    const image = ['https://www.yw11.com/uploads/allimg/171204/13-1G2041520093c.png', 'https://www.yw11.com/uploads/allimg/171204/13-1G2041520192T.png', 'https://scpic.chinaz.net/files/pic/pic9/202106/bpic23356.jpg', 'https://scpic.chinaz.net/files/pic/pic9/202105/bpic23236.jpg', 'https://scpic.chinaz.net/files/pic/pic9/202105/bpic23229.jpg', 'https://scpic.chinaz.net/files/pic/pic9/202104/bpic23006.jpg']
    return this.pick(image)
  }
})
export default {
  url: 'http://localhost:8080/mt/goods/fruits-list',
  method: 'get',
  response: () => ({
    'data|99': [
      {
        'id|+1': 1354894,
        'name': '@fruit()',
        'address': '@county(true)',
        'desc': '@ctitle(10)',
        'shop': '@shop()',
        'shopId|+1': 15783,
        'telephone': /^1(5|3|7|8)[0-9]{9}$/,
        'price|5-38': 30,
        'time': '8:00-23:00',
        'image': '@fruitImg()'
      }
    ]
  })
}

