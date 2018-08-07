/*
 * @Author: ll.wang
 * @Date: 2018-07-26 14:09:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-07 18:45:02
 */
const Service = require('egg').Service

// const mongoose = require('mongoose')

class NewService extends Service {


  async list() {
    console.log('app.config.mongoose.url', this.ctx)
    const newsList = this.ctx
    return newsList
  }
  
}

module.exports = NewService
