// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '../components/pages/Home.vue'
import NotFound from '../components/pages/404.vue'
import Notify from '../components/pages/NotifyPage.vue'

// Routering
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notify',
      name: 'notify',
      component: Notify
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})