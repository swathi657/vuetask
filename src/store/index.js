import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'vue-axios'
import axiosinstance from '../services/axios'
Vue.use(Vuex)

export const store = new  Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    list:[]
  },
  actions: {
    loginInto({commit}, user){
      return new Promise((resolve) => {
          commit('auth_request')
          axiosinstance({url:'/signin', data: user, method: 'POST' })
          .then(resp => {
              const token = resp.data.access_token
              const user = resp.data.user
              localStorage.setItem('access_token', token)
              // Add the following line:
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
          })
          
      })
  },
  // loadData({commit}){

  //   axios.get('https://dev-api.labsquire.com/v1.0/stats/dashboard')
  //       .then(r => r.data)
  //       .then(list =>{
  //         commit('GET_DATA',list)
  //          console.log(list)
  //       })
  // }
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    // GET_DATA(state,list){
    //   state.list = list
    // }
  },
 
})
