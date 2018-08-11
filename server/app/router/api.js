'use strict'
/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-08-08 09:50:30 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-11 17:35:52
 */
module.exports = app => {
  const { router, controller } = app

  const { user, document } = controller.api

  // 用户相关
  router.post('/user/login', user.login) // 登录
  router.post('/user/register', user.register) // 注册
  router.post('/user/reset', user.reset) // 密码重置

  // 文档操作
  router.post('/doc/create', document.create) // 生成html文件
  
}
