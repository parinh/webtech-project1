<template>
<div>
  <h1 class="text-center col mt-4 mb-4">HOME</h1>

  <div class="text-center">
  <router-link to="/UserHome"><button v-if="user" type="button" class="btn btn-primary">เปิดขอรับบริจาค</button></router-link>
  <router-link to="/Login"><button v-if="!user" type="button" class="btn btn-primary">เปิดขอรับบริจาค</button></router-link>
  <router-link to="/Donate"><button type="button" class="btn btn-danger">บริจาคสิ่งของ</button></router-link>
  </div>
</div>


</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('account',['user'])
  }
}

</script>
