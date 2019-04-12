import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    }
  ]
})
