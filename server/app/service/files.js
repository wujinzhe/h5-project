/*
 * @Author: ll.wang
 * @Date: 2018-07-31 17:44:43 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-01 10:20:45
 */

const Service = require('egg').Service

class FilesService extends Service {
  async getPageInfo () {
    const pageInfo = {
      userId: '',
      title: 'wangll',
      content: '2018年8月1日',
      buttonInfo: {
        text: '活动数据',
        url: 'www.baidu.com'
      }
    }
    return pageInfo
  }
}

module.exports = FilesService

