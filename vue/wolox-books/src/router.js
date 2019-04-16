import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { getToken } from './services/LocalStorageService'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: routes.home,
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: routes.sign_up,
      name: 'sign_up',
      component: () => import(/* webpackChunkName: "sign_up" */ './views/Register.vue')
    },
    {
      path: routes.login,
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '*',
      redirect: routes.home
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  to.fullPath === routes.login || to.fullPath === routes.sign_up ? next() : !token ? next(routes.login) : next()
})

export default router
