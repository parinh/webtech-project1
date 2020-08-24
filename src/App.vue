<template>
  <div id="app">

    <menu-bar></menu-bar>

    

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
}
</script>

<style>

</style>
