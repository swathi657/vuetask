import axios from 'axios'
import store from '../store/index.js'

const axiosinstance = axios.create({
    baseURL: 'https://dev-api.labsquire.com/v1.0'
  });
 axiosinstance.interceptors.request.use(function (config) {
    const token = store.state.token;
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    // config.headers.common["Authorization"] = store.state.access_token;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
// Add a response interceptor
axiosinstance.interceptors.response.use(function (response) {
    
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });
  export default axiosinstance
 