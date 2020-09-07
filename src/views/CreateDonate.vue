<template>
<body  class="wallpaper" style="background-color: #F39C12; ">
<div class="container font-Mitr">
    <br>
    <h1 class="text-center">ฟอร์มกรอก เปิดรับบริจาค</h1>
    <br>

     <form @submit.prevent="handleSubmit()">
          <div class = "form-group row">
              <div class="col-sm-2">
                  <label for="">ชื่อ * </label>
              </div>
              
              <div class="col-sm-10">
                  <input type="text" class="form-control"
                        placeholder="ชื่อผู้เปิดขอรับบริจาค" v-model="form.name">
              </div>   
          </div>


          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">เบอร์โทร * </label>
              </div>

              <div class="col-sm-10">
              <input type="text" class="form-control"
                    placeholder="เบอร์โทรที่สามารถติดต่อได้" v-model="form.tel">
              </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">ชนิด *</label>
              </div>

              <div class="col-sm-10">
                <select class="form-control" placeholder="ชนิดสิ่งของที่รับบริจาค" v-model="form.type" >
                <option value="" selected disabled hidden>กรุณาเลือกประเภท</option>
                <option>หน้ากากอนามัย</option>
                <option>เสื้อผ้า </option>
                <option>อาหาร</option>
                <option>น้ำ</option>
                <option>เวชภัณฑ์</option>
              </select>
              </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">จำนวน *</label>
              </div>
              <div class="col-sm-10">
              <input type="text" class="form-control"
                placeholder="จำนวนสิ่งของ" v-model="form.volume">
              </div>  
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">ที่อยู่ *</label>
              </div>
              <div class="col-sm-10">
              <input type="text" class="form-control"
                placeholder="ที่อยู่คร่าวๆ" v-model="form.address">
              </div>  
          </div>
          <div class="form-group">
              <button type="submit" class="btn btn-success" style="margin-top:30px; margin-left:500px">
                  เสร็จสิ้น
              </button>
          </div>
    </form>
</div>
</body>
</template>

<script>
import { donateService } from '../services/donate.service'
import { mapActions } from 'vuex'
import { router } from '../router'
export default {
    
    data(){
        return {
            form:{
                name: '',
                tel: '',
                type: '',
                volume: '',
                address:'',
            }
        }
    },
    methods:{
    
        ...mapActions('alert', ['error', 'success']),
        handleSubmit(){  
            if (this.form.name && this.form.tel && this.form.type && this.form.volume && this.form.address){
                donateService.create(this.form).then((data) => {                 
                    router.push({ name: 'Total' })
                    this.success('สำเร็จ')
                }).catch(error => {
                    this.error(error.message)
                })
            }else{
                this.error("ข้อมูลไม่ครบถ้วน หรือข้อมูลไม่ถูกต้อง")
            }
    
        }
}
}
    
</script>

<style>
</style>