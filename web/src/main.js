// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/hook'
import iview from 'iview'
import VueCodemirror from 'vue-codemirror'

import './theme/default/default.less'
import 'codemirror/lib/codemirror.css'
// require active-line.js
import 'codemirror/addon/selection/active-line.js'
// autoCloseTags
import 'codemirror/addon/edit/closetag.js'

Vue.use(iview)
Vue.use(VueCodemirror, {
  options: {
    tabSize: 2,
    mode: 'text/html',
    theme: 'monokai',
    lineNumbers: true,
    line: true,
    showCursorWhenSelecting: true, // 活动时是否绘制光标
    autofocus: true // 初始化时，添加焦点
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
