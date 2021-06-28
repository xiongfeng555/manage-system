import request from '@/utils/request.js'

export function fetchFruitsList() {
  return request({
    url: '/goods/fruits-list',
    method: 'get'
  })
}
