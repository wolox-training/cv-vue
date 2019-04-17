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
      path: `${routes.book}/:id`,
      name: 'book',
      component: () => import(/* webpackChunkName: "book" */ './views/Book.vue')
    },
    {
      path: '*',
      redirect: routes.home
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (to.fullPath === routes.login || to.fullPath === routes.sign_up) {
    next()
  } else if (!token) {
    next(routes.login)
  } else {
    next()
  }
})

export default router
