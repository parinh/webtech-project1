<template>
<body  class="wallpaper" style="background-color: #A6ACAF; ">
  <div class="font-Mitr">
<<<<<<< HEAD
      <h1 class="text-center">รายการผู้บริจาคสิ่งของ</h1>
=======
      <h1 class="text-center col mt-4 mb-4">รายการบริจาคสิ่งของ</h1>
>>>>>>> d074550fe92965c8da3326b6283b94fec5c84fdc
      <div>

        <div>
  </div>
      
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ชื่อผู้บริจาค</th>
          <th>ชนิด</th>
          <th>จำนวน</th>
          <th>เบอร์โทร</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="donatorinformation in donator" :key="donatorinformation">
          <td>
            {{ donatorinformation.name }}
          </td>
          <td>
            {{ donatorinformation.type }}
          </td>
          <td>
              {{ donatorinformation.volume }}
          </td>
          <td>
              {{ donatorinformation.tel }}
          </td>
          
        </tr>
      </tbody>
    </table>
    
  </div>
  </body>
</template>

<script>
import { donatorCollection } from '../firebase'

export default {
    data() {
       return {
           donator: [],
           
       } 
    },
    created(){
        donatorCollection.orderBy('createdAt','desc').get().then(data => {
            data.forEach(doc =>{
                console.log(doc.id, " => ", doc.data());
                this.donator.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
        })
    },
    edit(){

    },
    
    

}

</script>

<style>

</style>