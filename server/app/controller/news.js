/*
 * @Author: ll.wang
 * @Date: 2018-07-31 17:45:04 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-07 18:45:30
 */
const Controller = require('egg').Controller

class NewController extends Controller {
  async list () {
    const newsList = await this.ctx.model.User.find({})
    this.ctx.body = newsList
  }
}

module.exports = NewController
