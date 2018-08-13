'use strict'

const Service = require('egg').Service

class DocumentService extends Service {
  createDoc(pageInfo) {
  // editDoc(user, accessToken, headerInfo, contentHtml, btnList, createDate, modifiedDate) {
    // editType '1' 新增 '2' 修改
    // isRelease  true 保存

    const { user, accessToken, headerInfo, contentHtml, btnList, createDate, modifiedDate } = pageInfo

    const doc = new this.ctx.model.Document()

    doc.user = user
    doc.accessToken = accessToken
    doc.headerInfo = {
      title: headerInfo.title, // 标题
      h5Bar: headerInfo.h5Bar, // 是否用h5头
      shareInfo: {
        isShare: headerInfo.shareInfo.isShare, // 是否分享
        shareTitle: headerInfo.shareInfo.shareTitle, // 分享标题
        shareDesc: headerInfo.shareInfo.shareDesc, // 分享正文
        shareImg: headerInfo.shareInfo.shareImg, // 分享图片
      },
    }
    doc.contentHtml = contentHtml
    doc.btnList = btnList
    doc.createDate = createDate
    doc.modifiedDate = modifiedDate

    return doc.save()
  }

  editDoc(pageInfo) {
    const { _id, user, accessToken, headerInfo, contentHtml, btnList, createDate, modifiedDate } = pageInfo
    // 根据id对文档进行更新

  }
}

module.exports = DocumentService
