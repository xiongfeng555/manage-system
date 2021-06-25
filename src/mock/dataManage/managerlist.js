
export default {
  url: 'http://localhost:8080/mt/dataManage/managerlist',
  method: 'get',
  response: () => ({
    'data|10': [
      {
        'id|+1': 0,
        'date': '@date',
        'name': '@cname',
        'address': '@county(true)',
        'access': '管理员'
      }
    ]
  })
}
