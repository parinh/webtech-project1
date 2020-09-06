<template>
  <div class="container-fluid">
      <div class="font-Iteim" id="table">
        <h1 class="text-center">ยอดคงเหลือคลัง</h1>
        <table class="table">
      <thead>
        <tr>
          <th>ชนิดสิ่งของ</th>
          <th>จำนวน</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="donate in dataSummanry" :key="donate">
          <td>
            {{donate.name}}
          </td>
          
          <td>
              {{ donate.sumary }}
          </td>
          
          
        </tr>
      </tbody>
    </table>
    </div>
<div style="color: red">**จำนวนติดลบ = ยอดจำนวนบริจาคที่ต้องการ</div>
  </div>
  


</template>

<script>
import { openingdonateCollection } from '../firebase'
import { donatorCollection } from '../firebase'
export default {
  
  data(){
       return {
           openingdonate: [],
           dataSummanry: [],
           donatorList : [],
           }
      },
created(){
  donatorCollection.get().then(data => {
    data.forEach( doc => {
      this.donatorList.push(doc.data())
    })

  })
        openingdonateCollection.orderBy('createdAt').get().then(data => {
          let dataSet = []

            data.forEach(doc =>{
                let hasSet = dataSet.filter((item) => {
                  return item.name == doc.data().type;
                })
                if(hasSet.length == 0) {
                  dataSet.push({
                    name: doc.data().type,
                    sumary : doc.data().volume
                  })
                } else {
                  let key = Object.keys(dataSet).filter((item) => {
                  return dataSet[item].name == doc.data().type;
                  })[0];

                  dataSet[key].sumary = dataSet[key].sumary - doc.data().volume;
                }

                this.openingdonate.push({
                    id: doc.id,
                    ...doc.data()
                })
                
            })

          this.donatorList.forEach((list) => {
             let key = Object.keys(dataSet).filter((item) => {
              return dataSet[item].name == list.type;
              })[0];
            
            dataSet[key].sumary = (dataSet[key].sumary + list.volume)        
        
          })
          this.dataSummanry = dataSet;


        })


    },
    
}
</script>

<style>

</style>A