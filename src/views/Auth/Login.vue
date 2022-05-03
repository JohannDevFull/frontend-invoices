<template>
    <main class="form-signin">
        <form @submit.prevent="iniciarSesion">
            <img class="mb-4" src="../../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Please sign in:{{usuario}}</h1>

            <div class="form-floating">
                <input type="text" class="form-control input-bg" id="floatingInput" v-model="user_name" placeholder="name@example.com">
                <label for="floatingInput" class="text-dark">Username</label>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control input-bg" id="floatingPassword" v-model="password" placeholder="Password">
                <label for="floatingPassword" class="text-dark">Password</label>
            </div>

            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
    </main>
</template>

<script>

import axios from 'axios'
import { useUserStore } from '@/stores/user'


export default {
    setup(){
        const store = useUserStore()

        return { store }
    },
    name: 'AuthLogin',
    data(){
        return {
            user_name: '',
            password: '',
            loading: false
        }
    },
    computed: {
        usuario(){
            let valid;
            
            if(localStorage.getItem('token'))
            {
                this.$router.push('/dashboard');
            }

            return valid;
        }
            
    },
    methods: {
        iniciarSesion()
        {
            var payload = {
                user_name: this.user_name,
                password: this.password
            };

            this.loading = true;

            axios.post('http://127.0.0.1:8000/api/login', payload)
            .then(response => {
                
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                localStorage.setItem('token', response.data.token);
                this.store.$state = { 
                    token: response.data.token, 
                    name: response.data.token ,
                    isAuth: true,
                };
                
                this.$router.push('/dashboard');
            })
            .catch(error => {
                var data = error.response.data;
            });

            this.loading = false;
        }
    }
}
</script>

<style>

    .input-bg{
        background-color: #7b11f8 !important;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

</style>
