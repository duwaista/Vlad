import Vue from 'vue'
import Router from 'vue-router'
// Pages
import Authentication from '@/views/Authentication'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Authentication',
      component: Authentication
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '/root',
      name: 'Root',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Root.vue')
    },
    {
      path: '/bubu',
      name: 'Bubu',
      component: () => import(/* webpackChunkName: "login" */ '@/views/bubu.vue')
    }
  ]
})