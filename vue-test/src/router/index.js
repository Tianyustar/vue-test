import Vue from 'vue'
import Router from 'vue-router'
import ShowData from '../components/ShowData'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'ShowData',
      component: ShowData
    }
  ]
})
