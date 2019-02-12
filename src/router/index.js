import Vue from 'vue'
import Router from 'vue-router'
import CLXYJH from '@/components/CLXYJH'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CLXYJH',
      component: CLXYJH
    }
  ]
})
