<template>
  <div>
      <h1>Login</h1>

      <form @submit.prevent="handleSubmit()">
          <div class="form-group">
              <label for="">Email Adress * </label>
              <input type="text" class="form-control"
                placeholder="Your Email" v-model="form.email">
          </div>

          <div class="form-group">
              <label for="">Password * </label>
              <input type="password" class="form-control"
                placeholder="Your Password" v-model="form.password">
          </div>

          <div class="form group">
              <button class="btn btn-primary">Login</button>
              <router-link :to="{name: 'Register'}"
                    class="btn btn-link">
                    Register
              </router-link>
          </div>
      </form>
  </div>
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
            
        }
    }

}
</script>

<style>

</style>