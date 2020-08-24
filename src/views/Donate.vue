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
        <tr v-for="openingdonate in openingdonate" :key="openingdonate.id">
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
import { todosCollection } from '../firebase'

export default {
  data() {
    return {
      todos: [],
      new_todo: {
        name: '',
        priority: 0
      }
    }
  },
  firestore() {
    return {
      todos: todosCollection.orderBy('priority', 'desc')
    }
  },
  methods: {
    addTodo() {
      if (this.new_todo.name != '') {
        todosCollection.add({
          name: this.new_todo.name,
          priority: parseInt(this.new_todo.priority),
          completed: false,
          createdAt: new Date()
        })
      }
      this.new_todo = {
        name: '',
        priority: 0
      }
    },

    finishTodo(todo) {
      // asynchronous language / non-blocking io
      todo.completed = true
      todo.completedAt = new Date()
      todosCollection.doc(todo.id).update( { ...todo } )
    },

    deleteTodo(todo) {
      todosCollection.doc(todo.id).delete()
    }
  },
}
</script>

<style>

</style>