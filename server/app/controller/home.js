'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('result', this.ctx.model.User)
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
