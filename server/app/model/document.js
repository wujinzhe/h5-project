module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const conn = app.mongooseDB.get('db1')
  
  const DocumentSchema = new Schema({
    user: {type: String},
    accessToken: {type: String},
    titleInfo: {type: String},
    contentHtml: {type: String},
    btnInfo: {type: Array},
    createDate: {type: Date},
    modifiedDate: {type: Date}
  })

  // titleInfo 默认数据格式
  // DocumentSchema.path('titleInfo').default(() => {
  //   return {
  //     title: '', // 标题
  //     h5Bar: '', // 是否用h5头
  //     shareInfo: {
  //       isShare: '', // 是否分享
  //       shareTitle: '', // 分享标题
  //       shareDesc: '', // 分享正文
  //       shareImg: '' // 分享图片
  //     }
  //   }
  // })

  // // btnInfo 默认数据格式
  // DocumentSchema.path('btnInfo').default(() => {
  //   return []
  // })

  return conn.model('Document', DocumentSchema)
}