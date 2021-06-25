import foodlist from './foodlist'
import managerlist from './managerlist'
import orderlist from './orderlist'
import sellerlist from './sellerlist'
import userlist from './userlist'
const Mock = require('mockjs')
const arrObj = [
  foodlist,
  managerlist,
  orderlist,
  sellerlist,
  userlist
]

export function mockXHR() {
  for (const i of arrObj) {
    Mock.mock(i.url, i.method, i.response())
  }
}

