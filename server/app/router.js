'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  // console.log('app', app)
  // console.log('app', app.controller)
  router.get('/news', controller.news.list)
  router.get('/files', controller.files.files)
  router.post('/create', controller.files.create)
};

