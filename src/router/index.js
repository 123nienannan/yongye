import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Allscan from '@/views/allscan/Allscan'
import Parkuser from '@/views/parkuser/Parkuser'
import Opertion from '@/views/opertion/Opertion'
import Dataexcle from '@/views/Dataexcle/Dataexcle'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
     path: '/',
     redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/allscan',
          name: 'Allscan',
          component: Allscan,
        },
        {
          path: '/parkuser',
          name: 'Parkuser',
          component: Parkuser,
        },
        {
          path: '/opertion',
          name: 'Opertion',
          component: Opertion,
        },
        {
          path: '/dataexcle',
          name: 'Dataexcle',
          component: Dataexcle,
        }
      ]
    }
  ]
})
