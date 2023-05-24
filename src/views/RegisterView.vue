<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
</script>

<template>
    <div class="register">
        <img class="hero" src="@/assets/register-vektor.png" alt="">

        <div class="register-form">
            <img src="@/assets/logo-dark2.png" alt="">
            <div class="title">
                <h1>Selamat Datang di NorthExpo</h1>
                <p>Silahkan Daftar Terlebih Dahulu</p>
            </div>

            <form class="form-input" v-on:submit.prevent="register">
                <div class="form-group">
                    <label for="Username">Username</label>
                    <input type="text" placeholder="Nama" v-model="name"/>
                </div>
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="email" placeholder="Email" v-model="email"/>
                </div>
                <div class="form-group">
                    <label for="Password">Password</label>
                    <input type="password" placeholder="Password" v-model="password"/>
                </div>
                <button type="submit" class="button-register">Daftar</button>
                <p id="message">Sudah Mempunyai Akun? <a href="/">Masuk</a></p>
                </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Register',
    data() {
      return {
        name: '',
        email: '',
        password: '',
   
      }
    },
    
    methods: {
        async register(){
            let result = await axios.post('https://admin.api.northexpokudus.com/api/auth/register',{
                name: this.name,
                email: this.email,
                password: this.password,
            });
            console.warn(result);
            if(result.status == 201 && result.data){
                alert('Register Sukses');
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push('/');
            }
        },
        tes(){
            console.log('Register Sukses');
            alert('Register Sukses');
        }
        },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.register {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100%;
}

.register img {
    width: 40%;
    height: 100%;
    object-fit: cover;
}

.register-form {
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.register-form img {
    width: 160px;
    height: 65px;
}

.register-form .title h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-theme-950);
}

.register-form .title p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: #667085;
}

.register-form .form-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.register-form .form-input .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
}

.register-form .form-input .form-group label {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--color-theme-950);;
}

.register-form > .form-input > .form-group input {
    height: 3rem;
    padding-right: 0.2rem;
    border: 1px solid #667085;
    border-radius: 0.5rem;
    padding: 20px;
}

.register-form .form-group input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: #667085;
}   

.register-form button {
    width: 100%;
    height: 2.8rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #15ACC5;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin: 0.8rem auto;
    cursor: pointer;
}

.register-form .form-input .help-service {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.register-form .form-input .help-service .remember-me {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.register-form .form-input .help-service .remember-me input {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
}

.register-form .form-input .help-service .remember-me label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #667085;
    cursor: pointer;
}

.register-form .form-input .help-service a {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #15ACC5;
    text-decoration: none;
}

.register-form .form-input #message {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #667085;
}

.register-form .form-input #message > a {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #15ACC5;
    text-decoration: none;
}

@media screen and (max-width: 1024px) {
    .register .hero {
        display: none;
    }

    .register-form {
        width: 90%;
    }

    .register-form img {
        width: 100px;
        height: 40px;
    }

    .register-form .title h1 {
        padding:  0 2rem;
        font-size: 1.9rem;
    }

    .register-form .title p {
        font-size: 0.9rem;
        text-align: center;
    }
}

@media screen and (max-width: 768px) {
    .register-form {
        width: 80%;
    }

    .register-form img {
        width: 100px;
        height: 40px;
    }

    .register-form .title h1 {
        padding:  0 2rem;
        font-size: 2rem;
        text-align: center;
    }

    .register-form .title p {
        font-size: 0.9rem;
        text-align: center;
    }
}

</style>