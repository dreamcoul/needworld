import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Log from './../components/Log.vue'
import User from '@/components/User'
// import Index from '@/page/index'
// import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
