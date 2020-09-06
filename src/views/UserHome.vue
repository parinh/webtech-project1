<template>
<body class="wallpaper" style="background-color: #2ECC71;">
    <div class="font-Mitr">
      <h1 class="text-center">ยินดีต้อนรับ {{ user.displayName}}</h1>

      <div class="text-center">
  <router-link to="/DonateStatus"><button  type="button" class="btn btn-primary ">ตรวจสอบสถานะบริจาค</button></router-link>
  <router-link to="/CreateDonate"><button type="button" class="btn btn-danger">กรอกฟอร์มเปิดรับบริจาค</button></router-link>
  </div>
    </div>
</body>
    
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
.wallpaper{
    height: 100vh;

}
</style>