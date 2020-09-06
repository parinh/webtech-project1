<template>
  <div id="app">

    <menu-bar></menu-bar>

    <div v-if="alert.message" :class="`alert ${alert.type}`">
      {{ alert.message }}
    </div>

    <router-view></router-view>
    
    
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'app',
  computed:{
    ...mapState({
      alert: state => state.alert
    })
  },

  methods:{
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },

  components : {
    MenuBar
  },

  watch: {
    $route (to ,from){
      this.clearAlert()
    }
  }

}
</script>

<style>
</style>
