<template>
  
  <AppLayout v-if="store.isAuth" />
  
  <SiteLayout  v-else/>

</template>

<style>

</style>

<script >

import AppLayout from './layout/AppLayout.vue'
import SiteLayout from './layout/SiteLayout.vue'

import { useUserStore } from '@/stores/user'

export default {
  setup(){
    const store = useUserStore()

    return { store }
  },
  mounted() {
    setTimeout(()=>{
      this.tokenValidate
    },1000)
  },
  components: {
    AppLayout,
    SiteLayout
  },
  computed: {
    tokenValidate()
    {
      let valid;
      if(localStorage.getItem('token'))
      {
        valid=true;
        if(this.store.token == '')
        {
          alert("Refres token");
        }
        
      }
      else
      {
        valid=false;
      }

      return valid;
    }
  }

}
</script>
