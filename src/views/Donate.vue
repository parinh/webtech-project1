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
        <tr v-for="openingdonate in openingdonates" :key="openingdonate.id">
          <td>
            {{ openingdonate.name }}
          </td>
          <td>
            {{ openingdonate.type }}
          </td>
          <td>
              {{ openingdonate.volume }}
          </td>
          <td>
              {{ openingdonate.tel }}
          </td>
          <td>
              {{ openingdonate.address }}
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { openingdonate } from '../firebase'

export default {
    data() {
       return {
           openingdonates: []
       } 
    },
  firestore() {
    return {
      todos: openingdonateCollection.orderBy('desc')
    }
  },
}

</script>

<style>

</style>