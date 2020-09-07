<template>
<body class="wallpaper" style="background-color: #77dd77 ;">
    <div class="font-Mitr">
      <br>
      <h1 class="text-center col mb-4" >ยินดีต้อนรับ {{ user.displayName}}</h1>
      <h1 class="text-center col mb-4" style="color:#dd7777">กรุณาเลือกเมนูถัดไป...</h1>


      <div class="text-center" style="margin-top:20px">
        <br>
  <router-link to="/DonateStatus"><button  type="button" class="btn btn-primary btn-lg " style="margin-right:50px">ตรวจสอบสถานะบริจาค</button></router-link>
  <router-link to="/CreateDonate"><button type="button" class="btn btn-danger btn-lg" >กรอกฟอร์มเปิดรับบริจาค</button></router-link>
      
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