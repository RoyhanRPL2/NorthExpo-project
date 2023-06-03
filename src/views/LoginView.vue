<template>
    <div class="login">
        <img class="hero" src="@/assets/login-vektor.png" alt="">

        <div class="login-form">
            <img  src="@/assets/logo-dark2.png" alt="">
            <div class="title">
                <h1>Selamat Datang Kembali di NorthExpo</h1>
                <p>Silahkan Login Terlebih Dahulu</p>
            </div>
            <form v-on:submit.prevent="Login">
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="text" placeholder="Email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="Password">Password</label>
                    <input type="password" placeholder="Password" v-model="password">
                </div>
                <div class="help-service">
                    <div class="remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me" value="remember-me">
                        <label for="remember-me">Remember Me</label>
                    </div>
                    <a href="#">Forgot Password?</a>
                </div>
                <button id="Sign-Up" >Masuk</button>
                <p id="message">Belum Mempunyai Akun? <a href="/register">Daftar</a></p>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Login',
	data() {
        return {
            email: '',
			password: '',
		}
	},
	methods: {
        async Login() {
			let result = await axios.post('https://admin.api.northexpokudus.com/api/auth/login', {
				email: this.email,
				password: this.password,
			});
			console.warn(result);     
			if (result.status == 200 && result.data) {
				alert('Login Sukses');
				localStorage.setItem('user-info', JSON.stringify(result.data));
                
				this.$router.push('/');
			}
		}
	}
}



</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.login {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    height: 95vh;
    width: 100%;
}

.login img {
    width: 40%;
}

.login-form {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-form img {
    object-fit: cover;
    width: 150px;
    height: 170px;
    margin-bottom: -50px;
}

.login-form .title h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-theme-950);
}

.login-form .title p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: var(--color-theme-500);
}

.login-form form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-form form .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
}

.login-form form .form-group label {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--color-theme-950);
}

.login-form > form > .form-group input {
    height: 3rem;
    padding-right: 0.2rem;
    border: 1px solid #667085;
    border-radius: 0.5rem;
    padding: 20px;
}

.login-form .form-group input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: #667085;
}   

.login-form button {
    width: 100%;
    height: 2.8rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #15ACC5;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.3rem;
    cursor: pointer;
}

.login-form form .help-service {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.login-form form .help-service .remember-me {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.login-form form .help-service .remember-me input {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
}

.login-form form .help-service .remember-me label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: #667085;
}

.login-form form .help-service a {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #15ACC5;
    text-decoration: none;
}

.login-form form #message {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #667085;
}

.login-form form #message > a {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #15ACC5;
    text-decoration: none;
}

/* make responsive version */

@media screen and (max-width: 1024px) {
    .login {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login .hero {
        display: none;
    }

    .login-form {
        width: 50%;
    }

    .login .title h1 {
        width: 50%;
        text-align: left;
    }
    
}

@media screen and (max-width: 768px) {
    .login-form {
        width: 60%;
    }

    .login .title h1 {
        width: 100%;
        text-align: center;
    }

    .login .title p {
        width: 100%;
        text-align: center;
    }
}

@media screen and (max-width: 425px) {

    .login-form {
        width: 80%;
    }

    .login-form .title h1 {
        font-size: 1.5rem;
    }
}

@media screen and (max-width: 375px) {

    .login-form {
        width: 85%;
    }

    .login-form .title h1 {
        font-size: 1.5rem;
    }
}
</style>