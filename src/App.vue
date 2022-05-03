<template>
  
  <AppLayout v-if="store.isAuth" />
  
  <SiteLayout  v-else/>

</template>

<style>

</style>

<script >
import axios from 'axios'

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
      this.tokenValidate()
    },1000);
  },
  components: {
    AppLayout,
    SiteLayout
  },
  methods: {
    tokenValidate()
    {
      if(localStorage.getItem('token'))
      {
        if(this.store.token == '')
        {
          this.store.token=localStorage.getItem('token');
          this.store.isAuth=true;
          this.$router.push('/dashboard');
          this.getUserAuth();
        }
        
      }
    },
    getUserAuth()
    {
      
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.store.token;

      axios.get(this.store.url_base+'get-user-auth')
      .then(response => {
          this.store.$state = { 
              user_name: response.data.user.name ,
              name: response.data.user.name ,
              isAuth: true,
          };
      })
      .catch(error => {
          var data = error.response.data;
          this.store.$state = { 
              user_name: '' ,
              name: '' ,
              isAuth: false,
          };

          localStorage.removeItem('token');

          location.href="/";
      });
    }

  }

}
</script>
