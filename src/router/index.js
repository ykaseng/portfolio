import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'whoami',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/verbose',
    name: 'verbose',
    component: Home
  },
  {
    path: '/verbose/:slug',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
  },
  { 
    path: '/404', 
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  },
  { path: '/:catchAll(.*)', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
