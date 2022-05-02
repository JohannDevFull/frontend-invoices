<template>
    <main class="form-signin">
        <form @submit.prevent="iniciarSesion">
            <img class="mb-4" src="../../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Registro</h1>

            <div class="form-floating">
                <input type="text" class="form-control input-bg" id="username" v-model="user_name" placeholder="name@example.com">
                <label for="username" class="text-dark">Username</label>
            </div>

            <div class="form-floating">
                <input type="text" class="form-control input-bg" id="username" v-model="name" placeholder="name@example.com">
                <label for="username" class="text-dark">Nombre</label>
            </div>

            <div class="form-floating">
                <input type="email" class="form-control input-bg" id="floatingInput" v-model="email" placeholder="name@example.com">
                <label for="floatingInput" class="text-dark">Email </label>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control input-bg" id="floatingPassword" v-model="password" placeholder="Password">
                <label for="floatingPassword" class="text-dark">Password</label>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control input-bg" id="confirmationfloatingPassword" v-model="password_confirmation" placeholder="Confirmar Password">
                <label for="confirmationfloatingPassword" class="text-dark">Confirmar Password</label>
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

export default {
    name: 'AuthLogin',
    data(){
        return {
            name: '',
            user_name: '',
            password: '',
            email: '',
            password_confirmation:'',
            loading: false
        }
    },
    methods: {
        iniciarSesion()
        {
            var payload = {
                name:      this.name,
                email:      this.email,
                user_name:  this.user_name,
                password:   this.password,
                password_confirmation: this.password_confirmation
            };

            this.loading = true;

            axios.post('http://127.0.0.1:8000/api/register', payload)
            .then(response => {
                
                console.log(response)
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

                // localStorage.setItem('token', response.data);
                // localStorage.setItem('id', response.data.userData.id);
                // localStorage.setItem('userName', response.data.userData.userName);

                alert("Registrado correctamente")

                this.$router.push('/login');
            })
            .catch(error => {
                var data = error.response.data;
                // M.toast({html: data.message});

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
