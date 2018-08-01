/*
 * @Author: ll.wang
 * @Date: 2018-07-26 14:09:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-30 16:01:50
 */
const Service = require('egg').Service

class NewService extends Service {
  async list() {
    const newsList = [
      {id: 1, title: 'this is news 1', url: '/news/1'},
      {id: 2, title: 'this is news 2', url: '/news/2'}
    ]
    return newsList
  }
}

module.exports = NewService
