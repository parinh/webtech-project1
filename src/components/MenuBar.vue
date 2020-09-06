<template>
  <div class="font-Mitr">
      <nav class="navbar navbar-expand navbar-light bg-light">
  <a class="navbar-brand" href="#">
  </a>


  <div class=" navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/Donate" class="nav-link">Donate List</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/Total" class="nav-link">Total</router-link>
      </li>
      <li class="nav-item" v-if="user">
        <router-link to="/UserHome" class="nav-link">UserHome</router-link>
      </li>
      <li class="nav-item" v-if="user"> 
        <router-link to="/logout" class="nav-link">Logout</router-link>
      </li>
      <li class="nav-item" v-if="!user">
        <router-link to="/login" class="nav-link">Login</router-link>
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