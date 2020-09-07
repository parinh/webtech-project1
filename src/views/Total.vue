<template >
<body style="background-color:  #F4D03F;">
  <div class="container container-fluid font-Mitr wallpaper" >
      <div class="font-Item" id="table">
        <br>
        <h1 class="text-center col mb-4">ยอดคงเหลือคลัง/ยอดความต้องการ</h1>

        <table class="table" style="margin-top:30px; margin-right:auto">
      <thead>
        <tr style="background-color:pink">
          <th>ชนิดสิ่งของ</th>
          <th>จำนวนคงคลัง</th>
        </tr>
      </thead>
      <tbody style="background-color:white">
        
        <tr v-for="donate in dataSummanry" :key="donate">
          <td>
            <p class="font-weight-bolder" style="font-size: 40px">{{donate.name}}</p>
          </td>
          
          <td>
              <p class="font-weight-bolder" style="color: blue;font-size: 40px">{{ donate.sumary }}</p>
          </td>
          
          
        </tr>
  
      </tbody>
    </table>
    </div>
    <div style="color: red">**จำนวนติดลบ = จำนวนสิ่งของบริจาคที่ต้องการ</div>
  </div>
</body>


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
            dataSet[key].sumary = (dataSet[key].sumary + list.volume);
            
          })
          this.dataSummanry = dataSet;
        })
    },
    
}
</script>

<style>
.wallpaper{
    height: 100vh;

}
</style>