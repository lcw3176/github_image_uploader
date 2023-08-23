import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },

  {
    path: '/auth/convert',
    name: 'convert',
    component: () => import(/* webpackChunkName: "convert" */ '../views/ConvertView.vue')
  },

  {
    path: '/auth/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue')
  },

  {
    path: '/auth/done',
    name: 'auth-done',
    component: () => import(/* webpackChunkName: "auth-done" */ '../views/LoginDoneView.vue')
  },


  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
