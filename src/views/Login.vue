<template>
<body style="background-color:  #AF7AC5;">
  <div class="container font-Mitr wallpaper">
      <br>
      <h1 class="text-center col  mb-4" style="color: white" >เข้าสู่ระบบ</h1>
      <br>

      <form @submit.prevent="handleSubmit()">

        
          <div class = "form-group row">
              <div class="col-sm-2">
              <label for="">อีเมล * </label>
              </div>
            
            <div class="col-sm-5">
              <input type="text" class="form-control" 
                placeholder="Your Email" v-model="form.email">
          </div>
          </div>

          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">รหัสผ่าน * </label>
              </div>

              <div class="col-sm-5">
              <input type="password" class="form-control"
                placeholder="Your Password" v-model="form.password">
          </div>
          </div>
          <br>

          <div class="form group row">
              <div class="col-sm-2">
              <button class="btn btn-primary">เข้าสู่ระบบ</button>
              </div>
            
            <div class="col-sm-5">
              <router-link :to="{name: 'Register'}"
                    class="btn btn-link" style="color: white;">
                    สมัครสมาชิก
              </router-link>
            </div>
          </div>
      </form>
  </div>
</body>
</template>

<script>

import {mapState,mapActions} from 'vuex'

export default {
    data(){
        return{
            form:{  //บอกว่าใน form ที่สร้างข้างบนนี้ return ค่าอะไรบ้าง รับมาจาก v model ใน form ข้างบน
            email: "",
            password: ""
            }
        }
    },

    methods:{
        ...mapActions('account',['login']), //เรียกใช้ funcion login จาก module account ตอน handel แบบว่า login รหัสถูกไม่ถูก แล้วก็ถ้าถูกให้มันเปลี่ยนสถานะไรงี้ ถ้าไม่ก็ alert
        ...mapActions('alert',['error']),
        handleSubmit(event){ //action เวลากดปุ่ม //หน้า form ข้างบนก็ใส่
            if (this.form.email && this.form.password){ //เช็คว่าในฟอร์มมีข้อมูลไหม
                this.login(this.form) // เรียกให้ไป login ที่ account module โดยส่งข้อมูล form ไปปป ส่งค่าเดียวเพราะมันส่งเป็น object
            }
            else{
                this.error('กรุณากรอกข้อมูลให้ครบถ้วน')
                
            }
            
        }
    }

}
</script>

<style>
.wallpaper{
    height: 100vh;
}
</style>