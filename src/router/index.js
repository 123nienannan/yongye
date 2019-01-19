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
import Parkdevice from '@/views/parkdevice/Parkdevice'
import Adduser from '@/components/adduser'
import amendUser from '@/components/amenduser'
import keepMonth from '@/components/keepmonth'
import addsystemUser from '@/components/addsystemuser'
import amendsystemUser from '@/components/amendsystemuser'
import addsystemCompany from '@/components/addsystemcompany'
import amendsystemCompany from '@/components/amendsystemcompany'
import addGarage from '@/components/addgarage'
import keepGarage from '@/components/keepgarage'
import addregionGarage from '@/components/addregiongarage'
import keepregionGarage from '@/components/keepregiongarage'
import mapPark from '@/components/mappark'
import addmonitorRegion from '@/components/addmonitorregion'
import keepmonitorRegion from '@/components/keepmonitorregion'
import monitorMap from '@/components/monitormap'
import addcarSeat from '@/components/addcarseat'
import keepcarSeat from '@/components/keepcarseat'

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
          path: '/keepcarseat',
          name: 'keepcarSeat',
          component: keepcarSeat,
        },
        {
          path: '/addcarseat',
          name: 'addcarSeat',
          component: addcarSeat,
        },
        {
          path: '/monitormap',
          name: 'monitorMap',
          component: monitorMap,
        },
        {
          path: '/keepmonitorregion',
          name: 'keepmonitorRegion',
          component: keepmonitorRegion,
        },
        {
          path: '/addmonitorregion',
          name: 'addmonitorRegion',
          component: addmonitorRegion,
        },
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
        {
          path: '/addsystemuser',
          name: 'addsystemUser',
          component: addsystemUser,
        },
        {
          path: '/amendsystemuser',
          name: 'amendsystemUser',
          component: amendsystemUser,
        },
        {
          path: '/addsystemcompany',
          name: 'addsystemCompany',
          component: addsystemCompany,
        },
        {
          path: '/amendsystemcompany',
          name: 'amendsystemCompany',
          component: amendsystemCompany,
        },
        {
          path: '/addgarage',
          name: 'addGarage',
          component: addGarage,
        },
        {
          path: '/keepgarage',
          name: 'keepGarage',
          component: keepGarage,
        },
        {
          path: '/addregiongarage',
          name: 'addregionGarage',
          component: addregionGarage,
        },
        {
          path: '/keepregiongarage',
          name: 'keepregionGarage',
          component: keepregionGarage,
        },
        {
          path: '/mappark',
          name: 'mapPark',
          component: mapPark,
        },
      ]
    }
  ]
})
