import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import { auth } from '@/api/firebase'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      authRedirectToDashboard: true,
    },
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () =>
      import(/* webpackChunkName: "questions" */ '@/views/Questions.vue'),
    meta: {
      authRedirectToDashboard: true,
    },
  },
  {
    path: '/results',
    name: 'Results',
    component: () =>
      import(/* webpackChunkName: "results" */ '@/views/Results.vue'),
    meta: {
      authRedirectToDashboard: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/admin/Login.vue'),
    meta: {
      authRedirectToDashboard: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '@/views/admin/Dashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:catchAll(.*)',
    component: () =>
      import(/* webpackChunkName: "notfound" */ '@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth)
  const authRedirectToDashboard = to.matched.some(
    (x) => x.meta.authRedirectToDashboard
  )
  if (auth.currentUser && authRedirectToDashboard) {
    next('/dashboard')
  }
  if (requiresAuth && !auth.currentUser) {
    next('/login')
  }
  next()
})

export default router
