
export default {
  url: 'http://localhost:8080/mt/dataManage/userlist',
  method: 'get',
  response: () => ({
    'data|100': [
      {
        'id|+1': 0,
        'name': '@cname',
        'date': '@date',
        'address': '@county(true)'
      }
    ]
  })
}
