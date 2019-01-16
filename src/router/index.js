import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Allscan from '@/views/allscan/Allscan'
import Parkuser from '@/views/parkuser/Parkuser'
import Opertion from '@/views/opertion/Opertion'
import Dataexcle from '@/views/dataexcle/Dataexcle'
import Systemuser from '@/views/systemuser/Systemuser'
import Systemcompany from '@/views/systemcompany/Systemcompany'
import Systemrole from '@/views/systemrole/Systemrole'
import Vocation from '@/views/vocation/Vocation'
import Parkdevice from '@/views/parkdevice/Parkdevice'
import Adduser from '@/components/adduser'
import amendUser from '@/components/amenduser'
import keepMonth from '@/components/keepmonth'

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
        },
        {
          path: '/systemuser',
          name: 'Systemuser',
          component: Systemuser,
        },
        {
          path: '/systemcompany',
          name: 'Systemcompany',
          component: Systemcompany,
        },
        {
          path: '/systemrole',
          name: 'Systemrole',
          component: Systemrole,
        },
        {
          path: '/vocation',
          name: 'Vocation',
          component: Vocation,
        },
        {
          path: '/parkdevice',
          name: 'Parkdevice',
          component: Parkdevice,
        },
        {
          path: '/adduser',
          name: 'Adduser',
          component: Adduser,
        },
        {
          path: '/amenduser',
          name: 'amendUser',
          component: amendUser,
        },
        {
          path: '/keepmonth',
          name: 'keepMonth',
          component: keepMonth,
        },
      ]
    }
  ]
})
