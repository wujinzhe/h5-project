'use strict'
/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-08-08 09:50:30 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-08 17:53:18
 */
module.exports = app => {
  const { router, controller } = app

  const { user } = controller.api

  // 用户相关
  router.post('/user/login', user.login)
  router.post('/user/register', user.register)
  
}
