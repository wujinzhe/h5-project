'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service, config } = this;
    const user_name = ctx.params.name;

    const user = service.user.getUserByName(user_name)
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
