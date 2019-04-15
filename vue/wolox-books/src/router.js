import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: () => import(/* webpackChunkName: "sign_up" */ './views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')
  if (to.fullPath === '/login' || to.fullPath === '/sign_up') {
    next()
  } else if (!token) {
    next('/login')
  } else {
    next()
  }
})

export default router
