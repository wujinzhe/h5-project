const fs = require('fs')
const fse = require('fs-extra')
const Controller = require('egg').Controller

class DocumentController extends Controller {
  async create () {
    const { ctx, service} = this
    // const params = ctx.request.body
    
    // const result = await service.document.create(user, accessToken, userInfo, contentHtml, btnInfo, createDate, modifiedDate)
    
    const pageInfo = {
      userId: '',
      title: 'wangll',
      content: '2018年8月1日',
      buttonInfo: {
        text: '活动数据',
        url: 'www.baidu.com'
      }
    }

    const fileResult = await ctx.render('page.tpl', {pageInfo: pageInfo})
    console.log('fileResult', fileResult)

    fse.ensureFile('../assets/11.html', err => {
      console.log('err', err)
    })

    await fs.writeFile('../assets/11.html', ctx.body)

    // ctx.body = {
    //   success: true
    // }
    // generateHtml(pageInfo)

    // console.log('result', result)
  }
}

module.exports = DocumentController
