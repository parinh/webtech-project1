<template>
<div>
    <h1>เปิดรับบริจาค มีฟอร์มกรอก</h1>

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
              <input type="password" class="form-control"
                    placeholder="Your Phone Number" v-model="form.tel">
              </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">type *</label>
              </div>

              <div class="col-sm-10">
              <input type="dropdowns" class="form-control"
                placeholder="Choose your type" v-model="form.type">
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
                volume: ''
            }
        }
    },
    methods:{
    
        ...mapActions('alert', ['error', 'success']),
        handleSubmit(){
            if (this.form.name && this.form.tel && this.form.type && this.form.volume){
                donateService.create(this.form).then((data) => {
                    router.push({ name: 'Home' })
                    this.success('สำเร็จ')
                }).catch(error => {
                    this.error(error.message)
                })
            }else{
                this.error("ใส่ให้ครบ")
            }
    

        }
    }
}
</script>

<style>

</style>