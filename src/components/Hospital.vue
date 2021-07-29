<template>
    <h1>hospital</h1>
</template>

<script>
 import axios from 'axios'
export default{
  
    mounted(){
        // let token = localStorage.getItem('token')
        // console.log(token)
        axios.get('https://private-anon-f13a2bf5ae-devlabwerkslis.apiary-proxy.com/v1.0/hospitals?')
        .then((res) =>{
            // this.list=res.data.data
          console.log(res.data)

        })
    // this.$store.dispatch('loadData')
     },
    //  computed: mapState([
    //      'list'
    //  ])
}
</script>
