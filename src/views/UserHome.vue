<template>
    <div>
      <h1 class="text-center col mt-4 mb-4">WELCOME {{ user.displayName}}</h1>

      <div class="text-center">
  <router-link to="/DonateStatus"><button  type="button" class="btn btn-primary ">ตรวจสอบสถานะบริจาค</button></router-link>
  <router-link to="/CreateDonate"><button type="button" class="btn btn-danger">กรอกฟอร์มเปิดรับบริจาค</button></router-link>
  </div>
    </div>

    
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
    ...mapState('account',['user']) 
  },
}
</script>

<style>

</style>