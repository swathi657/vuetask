import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new  Vuex.Store({
  state: {
    // status: '',
    // token: localStorage.getItem('token') || '',
    // user : {}
    cases:[]
  },
  actions: {
   
  },
  mutations: {
   
  }
})
