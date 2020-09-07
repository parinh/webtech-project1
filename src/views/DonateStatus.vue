<template>
<body  class=" wallpaper" style="background-color: #7777dd; ">
  <div class="font-Mitr container">
    <br>
      <h1 class="text-center col mb-4" style="color: white">รายการผู้บริจาคสิ่งของ</h1>
      <br>
      <div>

        <div>
  </div>
      
    </div>
    <table class="table text-center">
      <thead>
        <tr style="background-color: #dddd77 ">
          <th>ชื่อผู้บริจาค</th>
          <th>ชนิด</th>
          <th>จำนวน</th>
          <th>เบอร์โทร</th>
        </tr>
      </thead>
      <tbody style="background-color: white">
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