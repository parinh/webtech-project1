<template>
<div class="font-Mitr">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <br>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" height="600">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../picture/4.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../picture/5.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../picture/6.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  <div class="text-center" style="margin-top:20px">
  <router-link to="/UserHome"><button v-if="user" type="button" class="btn btn-primary btn-lg " style="margin-right:100px">เปิดขอรับบริจาค</button></router-link>
  <router-link to="/Login"><button v-if="!user" type="button" class="btn btn-primary btn-lg" style="margin-right:50px">เปิดขอรับบริจาค</button></router-link>
  <router-link to="/Donate"><button type="button" class="btn btn-danger btn-lg" style="margin-right:50px">บริจาคสิ่งของ</button></router-link>
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
