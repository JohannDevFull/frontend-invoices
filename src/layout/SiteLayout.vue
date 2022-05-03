<template>

  <div class="cover-container d-flex w-100 h-100 p-3  flex-column">
    
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0">
          <router-link  to="/">Invoices</router-link> 
        </h3>
        
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <router-link :class="urlActive('/login')" to="/login">Login</router-link> 
          <router-link :class="urlActive('/register')" to="/register">Register</router-link>
        </nav>
      </div>
    </header>

    <main class="px-3">
      <router-view/>
    </main>

    <footer class="mt-auto text-white-50">
      <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
    </footer>
  </div>

</template>

<style>
  /*
  * Globals
  */


  /* Custom default button */
  .btn-secondary,
  .btn-secondary:hover,
  .btn-secondary:focus {
    color: #333;
    text-shadow: none; /* Prevent inheritance from `body` */
  }


  /*
  * Base structure
  */

  body {
    text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  }


  /*
  * Header
  */

  .nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    background-color: transparent;
    border-bottom: .25rem solid transparent;
  }

  .nav-masthead .nav-link:hover,
  .nav-masthead .nav-link:focus {
    border-bottom-color: rgba(255, 255, 255, .25);
  }

  .nav-masthead .nav-link + .nav-link {
    margin-left: 1rem;
  }

  .nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
  }

  #app{
    height: 100vh;
    width: 100vw;
  }

</style>

<script>

export default {
  name: 'HomeView',
  methods: {
    urlActive(val)
    {
      let resp;
      let url=  this.$route.path;
      if(url == val){resp="nav-link active";}else{resp="nav-link ";}
      return resp;
    },
  },

}
</script>
