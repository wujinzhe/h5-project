'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service, config } = this;
    const user_name = 'wll000111';

    // const user = await service.user.getUserByName(user_name)
    // console.log('user', user)
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
