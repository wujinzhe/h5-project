const Service = require('egg').Service

class DocumentService extends Service {
  createDoc (user, accessToken, userInfo, contentHtml, btnInfo, createDate, modifiedDate) {
    const doc = new this.ctx.model.Document()

    doc.user = user
    doc.accessToken = accessToken
    doc.userInfo = {
      title: '', // 标题
      h5Bar: '', // 是否用h5头
      shareInfo: {
        isShare: '', // 是否分享
        shareTitle: '', // 分享标题
        shareDesc: '', // 分享正文
        shareImg: '' // 分享图片
      }
    }
    doc.contentHtml = contentHtml
    doc.btnInfo = btnInfo
    doc.createDate = createDate
    doc.modifiedDate = modifiedDate

    return doc.save()
  }
}