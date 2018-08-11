const uuid = require('uuid')
const Service = require('egg').Service

class UserService extends Service {
  /**
   * 登录
   *
   * @param {*} name
   * @param {*} mb5Pwd
   * @returns
   * @memberof UserService
   */
  login (name, md5Pwd) {
    // const user = new this.ctx.model.User()
    const user = {
      name: name,
      md5Pwd: md5Pwd
    }

    return this.ctx.model.User.find(user).exec()
  }

  /**
   * 注册
   *
   * @param {*} name
   * @param {*} md5Pwd
   * @param {*} email
   * @param {*} department
   * @returns
   * @memberof UserService
   */
  userRegister (name, md5Pwd, email, department) {
    const user = new this.ctx.model.User()

    user.name = name
    user.md5Pwd = md5Pwd
    user.email = email
    user.department = department
    user.accessToken = uuid.v4()

    return user.save()
  }
/**
 * 密码重置
 *
 * @param {*} id
 * @param {*} md5Pwd
 * @returns
 * @memberof UserService
 */
pwdReset (id, md5Pwd) {
    const query = {_id: id}
    const update = {$set: {md5Pwd: md5Pwd}}
    return this.ctx.model.User.findByIdAndUpdate(query, update).exec()
  }
}
module.exports = UserService