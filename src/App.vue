<template>

  <div id="app">
   <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

  <div>
    <router-view/>
  </div>
   
  </div>
  
</template>

<script>


export default {
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
   
    // created: function () {
    //   this.$http.interceptors.response.use(undefined, function (err) {
    //     return new Promise(function (resolve, reject) {
    //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    //         this.$store.dispatch(logout)
    //       }
    //       throw err;
    //     });
    //   });
    // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
