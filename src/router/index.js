/*
 * @Description: 
 * @Author: 李昭
 * @Date: 2021-03-31 15:07:28
 * @LastEditTime: 2021-03-31 17:04:08
 * @LastEditors: 李昭
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/index.vue'
import father from '../views/1/father.vue'
import brother from '../views/2/index.vue'
import vuex from '../views/3/index.vue'
import parent from '../views/4/index.vue'
import attrs from '../views/5/index.vue'
import provide from '../views/6/index.vue'
import solt from '../views/7/index.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/father',
    name: 'father',
    component: father
  },
  {
    path: '/brother',
    name: 'brother',
    component: brother
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: vuex
  },
  {
    path: '/parent',
    name: 'parent',
    component: parent
  },
  {
    path: '/attrs',
    name: 'attrs',
    component: attrs
  },
  {
    path: '/provide',
    name: 'provide',
    component: provide
  },
  {
    path: '/solt',
    name: 'solt',
    component: solt
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router