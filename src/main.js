import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import {Form} from 'element-ui'
import {store} from './store'
import axios from 'axios'
import VueRouter from 'vue-router'

import router from './router/index.js'
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(axios)
Vue.use(Form)
window.axios=axios

Vue.prototype.http = axios;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}



new Vue({
  el : '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
