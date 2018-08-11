import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue')
    }
  ]
})

export default router
