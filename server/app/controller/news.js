/*
 * @Author: ll.wang
 * @Date: 2018-07-31 17:45:04 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-02 16:44:09
 */
const Controller = require('egg').Controller

class NewController extends Controller {
  async list () {
    // const dataList = {
    //   list: [
    //     {id: 1, title: 'this is news 1', url: '/news/1'},
    //     {id: 2, title: 'this is news 2', url: '/news/2'}
    //   ]
    // }

    const newsList = await this.ctx.service.news.list()

    // const result = await this.ctx.model.User.find({})
    console.log('result', this.ctx.model)

    await this.ctx.render('list.tpl', {list: newsList})
  }
}

module.exports = NewController
