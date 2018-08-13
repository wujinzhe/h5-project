'use strict'

const fs = require('fs')
const fse = require('fs-extra')
const Controller = require('egg').Controller

class DocumentController extends Controller {
  async create() {
    const { ctx, service } = this
    // const params = ctx.request.body

    // const result = await service.document.create(user, accessToken, userInfo, contentHtml, btnInfo, createDate, modifiedDate)

    const pageInfo = {
      editType: '1', // 1 新增   2 编辑
      user: 'wll',
      accessToken: '',
      headerInfo: {
        title: 'headerInfo.title',
        h5Bar: 'headerInfo.h5Bar',
        shareInfo: {
          isShare: 'headerInfo.shareInfo.isShare',
          shareTitle: 'headerInfo.shareInfo.shareTitle',
          shareDesc: 'headerInfo.shareInfo.shareDesc',
          shareImg: 'headerInfo.shareInfo.shareImg',
        },
      },
      contentHtml: 'divheader',
      btnList: [
        { text: '我的活动', link: '' },
      ],
      createDate: new Date(),
      modifiedDate: new Date(),
    }

    const fileResult = await ctx.render('page.tpl', { pageInfo })
    console.log('fileResult', fileResult)

    fse.ensureFile('../assets/11.html', err => {
      console.log('err', err)
    })

    await fs.writeFile('../assets/11.html', ctx.body)

    if (pageInfo.editType === '1') {
      const result = await ctx.service.document.createDoc(pageInfo)
      console.log('创建文档结果', result)
    } else if (pageInfo.editType === '2') {
      const result = await ctx.service.document.editDoc(pageInfo)
      console.log('创建文档结果', result)
    }
    // ctx.body = {
    //   success: true
    // }
    // generateHtml(pageInfo)

    // console.log('result', result)
  }
}

module.exports = DocumentController
