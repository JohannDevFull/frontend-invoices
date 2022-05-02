<template>
  
  <AppLayout v-if="usuario" />
  
  <SiteLayout  v-else/>

</template>

<style>

</style>

<script>
// @ is an alias to /src <SiteLayout /> <AppLayout  />
import AppLayout from './layout/AppLayout.vue'
import SiteLayout from './layout/SiteLayout.vue'

export default {
  
  components: {
    AppLayout,
    SiteLayout
  },
  computed: {
    usuario(){
      let valid;
      if(localStorage.getItem('token'))
      {
        valid=true;
        
      }
      else
      {
        valid=false;
      }

      return valid;
    },
    id(){
      return localStorage.getItem('id')
    }
  }

}
</script>
