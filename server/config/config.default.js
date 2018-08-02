'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531376130064_9111';

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }

  config.mongoose = {
    client: {
      url: 'mongodb://localhost:27017/h5-edit',
      options: {
        useNewUrlParser: true
      }
    }
  }

  // add your config here
  config.middleware = [];

  return config;
};
