<template>
  <div>
      <nav class="navbar navbar-expand navbar-light bg-light">
  <a class="navbar-brand" href="#">
  </a>


  <div class=" navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/Donate" class="nav-link">รายการเปิดรับบริจาค</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/Total" class="nav-link">คลังของบริจาค</router-link>
      </li>
      <li class="nav-item" v-if="user">
        <router-link to="/UserHome" class="nav-link">เมนู</router-link>
      </li>
      <li class="nav-item" v-if="user"> 
        <router-link to="/logout" class="nav-link">ออกจากระบบ</router-link>
      </li>
      <li class="nav-item" v-if="!user">
        <router-link to="/login" class="nav-link">เข้าสู่ระบบ</router-link>
      </li>

    </ul>
  </div>
</nav>
  </div>
</template>

<script>

 import {mapState} from 'vuex'
export default {
    computed:{
         ...mapState ('account', ['user'])
    },

}
</script>

<style>

</style>