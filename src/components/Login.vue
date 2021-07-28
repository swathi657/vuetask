<template>
  <div class="login">
    
    <el-form ref="form" :model="form" class="login-form" @submit.prevent="login">
      <el-form-item label="Username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
         <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
         <el-button class="login-button" @click="loginInto">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
    };
  },
  methods: {
     loginInto()
{     
   axios.post('https://private-anon-205cf591c3-devlabwerkslis.apiary-proxy.com/v1.0/signin',this.form)
   .then(response =>{
     console.log(response)
     let token = response.data.access_token
    localStorage.setItem('acess_token',token);
    // this.$store.dispatch('loginInto', this.form)
     this.$router.push('/dash')
   });
}
  },
};
</script>
<style scoped>
.login-form {
  width: 290px;
}
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-button {
  width: 50%;
  margin-top: 40px;
}
</style>