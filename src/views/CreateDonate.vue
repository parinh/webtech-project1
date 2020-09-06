<template>
<div class="container">
    <h1 class="text-center col mt-4 mb-4">ฟอร์มกรอก เปิดรับบริจาค</h1>

     <form @submit.prevent="handleSubmit()">
          <div class = "form-group row">
              <div class="col-sm-2">
                  <label for="">Name * </label>
              </div>
              
              <div class="col-sm-10">
                  <input type="text" class="form-control"
                        placeholder="Your Name" v-model="form.name">
              </div>   
          </div>


          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">Phone Number * </label>
              </div>

              <div class="col-sm-10">
              <input type="text" class="form-control"
                    placeholder="Your Phone Number" v-model="form.tel">
              </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">type *</label>
              </div>

              <div class="col-sm-10">
              <select class="form-control" placeholder="Choose your type" v-model="form.type">
                <option>หน้ากากอนามัย</option>
                <option>เสื้อผ้า</option>
                <option>อาหาร</option>
                <option>น้ำ</option>
                <option>เวชภัณฑ์</option>
              </select>
              </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">Volume</label>
              </div>
              <div class="col-sm-10">
              <input type="text" class="form-control"
                placeholder="Enter Volume" v-model="form.volume">
              </div>  
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">Address</label>
              </div>
              <div class="col-sm-10">
              <input type="text" class="form-control"
                placeholder="Enter Address" v-model="form.address">
              </div>  
          </div>
          <div class="form-group">
              <button type="submit" class="btn btn-primary">
                  submit
              </button>
          </div>
    </form>
</div>
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
<<<<<<< HEAD
    methods:{
    
        ...mapActions('alert', ['error', 'success']),


        handleSubmit(){  
            if (this.form.name && this.form.tel && this.form.type && this.form.volume && this.form.address){
                donateService.create(this.form).then((data) => {                 
                    router.push({ name: 'Donate' })
                    this.success('สำเร็จ')

                }).catch(error => {
                    this.error(error.message)
                })
            }else{
                this.error("ข้อมูลไม่ครบถ้วน หรือข้อมูลไม่ถูกต้อง")
            }
    
=======
>>>>>>> eeeb4afbcbd306be76735519ea9cb13c9318d22e

}
    
</script>

<style>

</style>