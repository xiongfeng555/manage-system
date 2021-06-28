import fruits from './fruits.js'
const Mock = require('mockjs')
const arrObj = [
  fruits
]

export function mockGoods() {
  for (const i of arrObj) {
    Mock.mock(i.url, i.method, i.response())
  }
}

