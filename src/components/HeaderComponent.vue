<script setup>
import NorthExpoLogo from '../assets/images/logo.png'
import { ref, onMounted } from 'vue'
const isLoggedIn = ref(false)
const username = ref('')
const useravatar = ref('')

function showProfileOverlay () {
    const profileOverlay = document.querySelector('.profile-overlay')
    profileOverlay.classList.toggle('show')
}

function showRegister () {
    window.location.href = '/register'
}

function logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('user-info')
    window.location.href = '/'
}

onMounted(async () => {
    isLoggedIn.value = checkUserloginStatus()

    function checkUserloginStatus() {
        // get token
        const token = localStorage.getItem('token')
        return token ? true : false
    }

    const userInfo = localStorage.getItem('user-info')
    if (userInfo) {
        username.value = JSON.parse(userInfo)
        useravatar.value = JSON.parse(userInfo)
    }

    console.log(isLoggedIn.value)
})
</script>

<template>
    <div class="navbar">
        <router-link :to="{ name: 'home' }">
            <img :src="NorthExpoLogo" alt="North Expo Logo" id="logo">
        </router-link>
        <nav class="nav-links">
            <ul>
                <li><a href="/" class="underline">Beranda</a></li>
                <li><a href="/destinasi" class="underline">Destinasi</a></li>
                <li><a href="/tiket" class="underline">Informasi Umum</a></li>
                <li><a href="/map" class="underline">Peta Wisata</a></li>
            </ul>
        </nav>

        <div class="nav-action">
            <div class="user-profile" v-if="isLoggedIn">
                <div class="profile">
                    <p>Halo, {{ username.user.name }}</p>
                    <!-- get img avatar from username.user.avatar -->
                    <img :src="'https://admin.api.northexpokudus.com/assets/img/avatar/' + useravatar.user.avatar"
                        alt="user avatar" @click="showProfileOverlay()">
                </div>
                <div class="profile-overlay">
                    <ul>
                        <li><a href="/profile">Profile</a></li>
                        <li><a v-on:click="logout()">Logout</a></li>
                    </ul>
                </div>
            </div>
            <div class="action" v-else>
                <a href="/login" class="underline">Masuk</a>
                <button @click="showRegister">Daftar</button>
            </div>
        </div>
    </div>
    <div class="bg">
        <!-- <img :src="GunungMuria" alt=""> -->
    </div>
    <div class="content"></div>
</template>

<style scoped>
.navbar {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 150px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 100;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(30px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.navbar #logo {
    width: 80px;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
    filter: invert(1);
}

.navbar .nav-links ul {
    display: flex;
    align-items: center;
}

.nav-links ul li {
    list-style: none;
    margin: 0 25px;
}

.nav-links ul li a,
a {
    text-decoration: none;
    color: var(--color-theme-950);
    font-size: 16px;
    font-weight: 500;
}

a {
    background: linear-gradient(0deg, var(--color-primary-500), var(--color-primary-500)) no-repeat right bottom / 0 var(--bg-h);
    transition: background-size 350ms;
    line-height: 1;
    --bg-h: 100%;
}

a:where(:hover, :focus-visible) {
    background-size: 100% var(--bg-h);
    background-position-x: left;
}

.underline,
.nav-action .action {
    padding-bottom: 3px;
    --bg-h: 2px;
}

.navbar .nav-action .action {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: var(--color-theme-950); */
}

.nav-action .user-profile .profile {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-action .user-profile .profile p {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-theme-950);
    text-transform: capitalize;
    margin-right: 20px;
}

.nav-action .user-profile .profile img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
}

.nav-action .user-profile .profile-overlay {
    position: absolute;
    top: 150%;
    right: 0;
    width: 130px;
    height: 100px;
    background-color: var(--color-theme-900);
    border-radius: 5px;
    display: none;
    justify-content: center;
    align-items: center;
    transition: 600ms;
}

.nav-action .user-profile .profile-overlay.show {
    display: flex;
    flex-direction: column;
}

.user-profile .profile-overlay ul {
    position: absolute;
    left: 0;
}

.user-profile .profile-overlay ul li {
    list-style: none;
    margin-bottom: 5px;
}

.user-profile .profile-overlay ul li a {
    text-decoration: none;
    color: var(--color-theme-50);
    font-size: 16px;
    background: linear-gradient(0deg, var(--color-primary-500), var(--color-primary-500)) no-repeat right bottom / 0 var(--bg-h);
    transition: background-size 350ms;
    line-height: 1;
    --bg-h: 2px;
    cursor: pointer;
}

.user-profile .profile-overlay ul li a:where(:hover, :focus-visible) {
    background-size: 100% var(--bg-h);
    background-position-x: left;
}

.nav-action .action button {
    padding: 8px 18px;
    font-size: 16px;
    color: var(--color-theme-50);
    background-color: var(--color-primary-500);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 600ms;
}

.nav-action .action button:hover {
    background-color: var(--color-primary-600);
}
</style>