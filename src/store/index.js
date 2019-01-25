import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
 state: {
  nowVal:false,
  changeVal: false,
  deviceVal:false,
  systemcompanyVal: false,
  activeName:"first"
 },
 mutations: {
   changeActiveName (state,data) {
     state.activeName = data
   },
   changeStatus (state) {
     state.nowVal = true
   },
   keepNative (state) {
    state.nowVal = false
   },
   changesyatemStatus (state) {
     state.changeVal = true
   },
   keepsystemNative (state) {
     state.changeVal = false
   },
   changesyatemcompanyStatus (state) {
    state.systemcompanyVal = true
   },
   keepsystemcompanyNative (state) {
    state.systemcompanyVal = false
   },
   changedevice (state) {
    state.deviceVal = true
   },
   keepdevice (state) {
     state.deviceVal = false
   },

 }
})

export default store
