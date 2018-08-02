const Controller = require('egg').Controller
const fs = require('fs')

class FilesController extends Controller {
  // 新建
  async files () {
    const pageInfo = await this.ctx.service.files.getPageInfo()

    const newFile = await this.ctx.render('page.tpl', {pageInfo: pageInfo})
    const request = this.ctx.request
    console.log('request', request)
  }
  async create () {
    const request = this.ctx.request
    const response = this.ctx.response
    console.log('request111', request)

    const { ctx } = this 

    ctx.body = {
      result: 'success'
    }
    console.log('response', response)
    // ctx.status = 200
  }
}
module.exports = FilesController
