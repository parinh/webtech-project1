<template>
  
</template>

<script>
import {mapActions} from 'vuex'

export default {
    created(){
        this.logout() //เรียกใช้ฟังชั่น logout
    },

    methods:{
        ...mapActions('account' , ['logout'])
    }

}
</script>

<style>

</style>