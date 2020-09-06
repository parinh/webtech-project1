<template>
  <div class="container-fluid">
      <div class="font-Itim" id="table">
         <h1 class="text-center">Donate List</h1>
        <table class="table">
      <thead>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>volume</th>
          <th>phone number</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="donate in openingdonate" :key="donate">
          <td>
            {{ donate.name }}
          </td>
          <td>
            {{ donate.type }}
          </td>
          <td>
              {{ donate.volume }}
          </td>
          <td>
              {{ donate.tel }}
          </td>
          <td>
              {{ donate.address }}
          </td>
          
        </tr>
      </tbody>
    </table>
      <h1 class="text-center">Donator</h1>
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
          <div class="form-group">
              <button type="submit" class="btn btn-primary">
                  submit
              </button>
          </div>
    </form>

      
    </div>
    
  </div>
  
  
</template>

<script>
import { openingdonateCollection } from '../firebase'
import { donatorCollection } from '../firebase'
import { donatorService } from '../services/donator.service'
import { mapActions } from 'vuex'
import { router } from '../router'

export default {

    data() {
       return {
           openingdonate: [],
           donator: [],
            form:{
                name: '',
                tel: '',
                type: '',
                volume: '',
            }
        }
    },
    created(){
        openingdonateCollection.orderBy('createdAt','desc').get().then(data => {
            data.forEach(doc =>{
                this.openingdonate.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
        })
    },

    methods:{
        ...mapActions('alert', ['error', 'success']),
        handleSubmit(){
            
                if (this.form.name && this.form.tel && this.form.type && this.form.volume){
                    donatorService.create(this.form).then((data) => {                 
                        router.push({ name: 'DonateStatus' })
                        this.success('สำเร็จ')

                    }).catch(error => {
                        this.error(error.message)
                    })
                }
            else{
                this.error("กรุณากรอกข้อมูลให้ครบถ้วน")
            }
    
        }
    },
    edit(){

    }

}

</script>

<style>

</style>