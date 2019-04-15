import Vue from 'vue'
import Router from 'vue-router'
import ROUTES from './routes'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: ROUTES.HOME,
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: ROUTES.SIGN_UP,
      name: 'sign_up',
      component: () => import(/* webpackChunkName: "sign_up" */ './views/Register.vue')
    },
    {
      path: ROUTES.LOGIN,
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '*',
      redirect: ROUTES.HOME
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')
  to.fullPath === ROUTES.LOGIN || to.fullPath === ROUTES.SIGN_UP ? next() : !token ? next(ROUTES.LOGIN) : next()
})

export default router
