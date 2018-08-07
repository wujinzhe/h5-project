const Service = require('egg').Service

class UserService extends Service {
  // 根据用户名查找用户
  getUserByName (name) {
    const query = {user: name}
    return this.ctx.model.User.find(query).exec()
  }
}
module.exports = UserService