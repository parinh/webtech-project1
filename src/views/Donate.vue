<template>
<body style="background-color: #5DADE2; color: white;">
    <section class="split-1 font-Mitr">
          <div class="table-split">
            <table class="table table-bordered " style="margin:30px;">
            <thead>
                <tr style="text-align:center; background-color: #ffffb3">
                <th>ชื่อผู้เปิดรับบริจาค</th>
                <th>ชนิด</th>
                <th>จำนวน</th>
                <th>เบอร์โทร</th>
                <th>ที่อยู่</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="donate in openingdonate" :key="donate" style="background-color: white">
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
          </div>
        <div class="form-split" style="margin-left: 100px">
            <h1 class="text-center col mt-4 mb-4">ฟอร์มบริจาคสิ่งของ</h1>
            <form @submit.prevent="handleSubmit()">
                <div class = "form-group row" style="margin-top:50px">
                    <div class="col-sm-2" >
                        <label for="" >ชื่อ</label>
                    </div>
                    
                    <div class="col-sm-9">
                        <input placeholder="ชื่อผู้บริจาค" type="text" class="form-control"  v-model="form.name">
                    </div>   
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">
                    <label for="">เบอร์</label>
                    </div>

                    <div class="col-sm-9">
                    <input placeholder="เบอร์โทร" type="text" class="form-control" v-model="form.tel">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-2">
                    <label for="">ชนิด</label>
                    </div>

                    <div class="col-sm-9">
                        <select class="form-control" placeholder="Choose your type" v-model="form.type" >
                        <option value="" selected disabled hidden>กรุณาเลือกประเภท</option>
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
                    <label for="">จำนวน</label>
                    </div>
                    <div class="col-sm-9">
                    <input placeholder="จำนวนที่บริจาค" type="text" class="form-control" v-model="form.volume">
                    </div>  
                </div>
                <div class="form-group" style="margin-left:250px">
                    <button type="submit" class="btn btn-success">
                        เสร็จสิ้น
                    </button>
                </div>
            </form>
        </div>
    </section>
</body>
  
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
                console.log(doc.id, " => ", doc.data());
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
            }else{
                this.error("ข้อมูลไม่ครบถ้วน หรือข้อมูลไม่ถูกต้อง")
            }
    
        }
    },
    edit(){

    }

}

</script>

<style>
.split-1{
    height: 100vh;
    display: flex;
}
.table-split{
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.form-spilt{
    margin-left:200px;
    width: 50%;
}



</style>