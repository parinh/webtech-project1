<template>
  <div class="container">
      <h1 class="text-center col mt-4 mb-4">Register</h1>

      <form @submit.prevent="handleSubmit()">
          <div class = "form-group row">
              <div class="col-sm-2">
                  <label for="">Email Address * </label>
              </div>
              
              <div class="col-sm-10">
                  <input type="text" class="form-control"
                        placeholder="Your Email" v-model="form.email">
              </div>   
          </div>


          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">Password * </label>
              </div>

              <div class="col-sm-10">
              <input type="password" class="form-control"
                    placeholder="Your Password" v-model="form.password">
              </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">Display Name *</label>
              </div>

              <div class="col-sm-10">
              <input type="text" class="form-control"
                placeholder="Your Name" v-model="form.displayName">
              </div>
          </div>
          <div class="form-group row">
              <div class="col-sm-2">
              <label for="">Phone Number*</label>
              </div>
              <div class="col-sm-10">
              <input type="text" class="form-control"
                placeholder="Your Phone Number" v-model="form.phoneNumber">
              </div>
          </div>
          <div class="form-group">
              <button class="btn btn-primary">
                  Register
              </button>
          </div>
      </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data(){
        return{
            form:{
                email: '',
                password: '',
                displayName: '',
                phoneNumber: ''
            }
        }
    },
    methods:{
        ...mapActions('account',['register']),
        ...mapActions('alert',['error']),
        handleSubmit(){
            if (this.form.email && this.form.password && this.form.displayName && this.form.phoneNumber){
                this.register(this.form)
            }else{
                this.error("กรุณากรอกข้อมูลให้ครบถ้วน")
            }
    

        }
    }

}
</script>

<style>

</style>