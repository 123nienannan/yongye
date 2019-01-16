import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
 state: {
  nowVal:false
 },
 getters: {

 },
 mutations: {
   changeStatus (state) {
     state.nowVal = true
   },
   keepNative (state) {
    state.nowVal = false
   }
 }
})

export default store
