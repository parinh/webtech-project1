<template>
  <div>
      <h1>Donate List</h1>
      <div>
      
    </div>
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
        <tr v-for="donate in openingdonate" :key="donate.id">
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
</template>

<script>
import { openingdonateCollection } from '../firebase'

export default {
    data() {
       return {
           openingdonate: [],
       } 
    },
    created(){
        openingdonateCollection.orderBy('createdAt').get().then(data => {
            data.forEach(doc =>{
                console.log(doc.id, " => ", doc.data());
                this.openingdonate.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
        })
    }

}

</script>

<style>

</style>