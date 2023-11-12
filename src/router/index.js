import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Introduction from '../views/Introduction'
import Production from '../views/Production'
import Service from '../views/Service'
import Info from '../views/Info'
import Research from '../views/Research'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/production',
      name: 'Production',
      component: Production
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/research',
      name: 'Research',
      component: Research
    },
    {
      path: '/',
      name: 'Index',
      redirect: '/home'
    }
  ]
})
