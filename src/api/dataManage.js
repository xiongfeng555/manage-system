import request from '@/utils/request'

// 请求食品列表
export function fetchFoodList() {
  return request({
    url: '/dataManage/foodlist',
    method: 'get'
  })
}

// 请求管理员列表
export function fetchManagerList() {
  return request({
    url: '/dataManage/managerlist',
    method: 'get'
  })
}

// 请求订单列表
export function fetchOrderList() {
  return request({
    url: '/dataManage/orderlist',
    method: 'get'
  })
}

// 请求卖家列表
export function fetchSellerList() {
  return request({
    url: '/dataManage/sellerlist',
    method: 'get'
  })
}

// 获取用户列表
export function fetchUserList() {
  return request({
    url: '/dataManage/userlist',
    method: 'get'
  })
}

