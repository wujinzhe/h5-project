const Controller = require('egg').Controller
const fs = require('fs')

class FilesController extends Controller {
  // 新建
  async create () {


    const pageInfo = await this.ctx.service.files.getPageInfo()

    const newFile = await this.ctx.render('page.tpl', {pageInfo: pageInfo})
    
    // console.log('newFile', newFile)
    // fs.writeFile('xxx.html', newFile, err => {
    //   console.log(err)
    // })
  }

}
module.exports = FilesController
