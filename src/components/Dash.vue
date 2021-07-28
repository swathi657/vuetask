<template>
<div>
    <h3>hello</h3>
    
   <p>Pending Cases:{{list.pending_cases}}</p> 
   <p>Total Cases:{{list.total_cases}}</p>
    <p>Total Orders:{{list.total_orders}}</p>
    <p>Pending Orders:{{list.pending_orders}}</p>
</div>
</template>

<script>

import axios from 'axios'
export default{
   data(){
       return {list:undefined}
   },
    mounted(){
        // let token = localStorage.getItem('token')
        // console.log(token)
        axios.get('https://dev-api.labsquire.com/v1.0/stats/dashboard')
        .then((res) =>{
            // this.list=res.data.data
          console.log(res.data.data)
          this.list = res.data.data
        })
        // this.$store.dispatch('loadData')
    }
}
</script>
