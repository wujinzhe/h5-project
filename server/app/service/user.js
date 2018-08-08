const uuid = require('uuid')
const Service = require('egg').Service

class UserService extends Service {
  /**
   *
   *
   * @param {*} name
   * @param {*} mb5Pwd
   * @returns
   * @memberof UserService
   */
  login (name, mb5Pwd) {
    // const user = new this.ctx.model.User()
    const user = {
      name: name,
      mb5Pwd: mb5Pwd
    }

    return this.ctx.model.User.find(user).exec()
  }

  // 用户注册
  userRegister (name, mb5Pwd, email, department) {
    const user = new this.ctx.model.User()

    user.name = name
    user.mb5Pwd = mb5Pwd
    user.email = email
    user.department = department
    user.accessToken = uuid.v4()

    return user.save()
  }
}
module.exports = UserService