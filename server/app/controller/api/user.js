const Controller = require('egg').Controller


class UserController extends Controller {
  async login () {
    const { ctx, service, config } = this;
    const loginInfo = ctx.request.body

    const result = await service.user.login(loginInfo.name, loginInfo.mb5Pwd)
    console.log('user', result)
    this.ctx.body = {
      success: result.length !== 0 ? true : false,
      result: result[0]
    }
  }

  async register () {
    const { ctx, service, config } = this;
    const userInfo = ctx.request.body
    
    const result = await service.user.userRegister(userInfo.name, userInfo.mb5Pwd, userInfo.email, userInfo.department)
    console.log('result', result)

    this.ctx.body = {
      success: true,
      result: result ? '返回成功' : '失败'
    }
  }
}

module.exports = UserController