import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/layout/main/main.vue'),
    children:[
      {
        path:'/',
        name:'home',
        component: ()=> import('@/views/home.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/order/order.vue')
      },
      {
        path: '/addPayment',
        name: 'addPayment',
        component: () => import('@/views/addPayment/addPayment.vue')
      },
      {
        path: '/storage',
        name: 'storage',
        component: () => import('@/views/storage/storage.vue')
      },
      {
        path: '/drawer',
        name: 'drawer',
        component: () => import('@/views/drawer/drawer.vue')
      }
    ],
  },
  {
    path: '/detail',
    name: 'detail',

    component: () => import('@/views/detail/detail.vue')
  },
  {
    path: '/addPayDetail',
    name: 'addPayDetail',
    component: () => import('@/views/addPayDetail/addPayDetail.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/map/map.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
