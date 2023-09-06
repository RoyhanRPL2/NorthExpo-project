<script setup>
import NorthExpoLogo from '../assets/images/logo.png'
import LogoutPopup from './LogoutPopup.vue';
import { ref, onMounted } from 'vue'
import axios from 'axios'
const isLoggedIn = ref(false)
const username = ref('')
const useravatar = ref('')
const userData = ref([]);

function showProfileOverlay() {
    const profileOverlay = document.querySelector('.profile-overlay')
    profileOverlay.classList.toggle('show')
}

function showRegister() {
    window.location.href = '/register'
}

function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user-info')
    window.location.href = '/'
}

const showLogoutPopup = ref(false);

function showPopup() {
    showLogoutPopup.value = true;
}

function hidePopup() {
    showLogoutPopup.value = false;
}

function performLogout() {
    logout();
    hidePopup();
}

const getUserToken = () => {
    const token = localStorage.getItem('token');
    return token ? token.replace(/['"]+/g, '') : '';
};

function checkUserloginStatus() {
    // get token
    const token = getUserToken();
    return token ? true : false
}

const getUserData = async () => {
    const userToken = getUserToken();
    isLoggedIn.value = checkUserloginStatus();
    console.log(isLoggedIn.value);
    try {
        const response = await axios.get('https://admin.api.northexpokudus.com/api/auth/user', {
            headers: {
                Authorization: `Bearer ${userToken}`
            },
        });
        userData.value = response.data.data;
        username.value = userData.value.name;
        useravatar.value = userData.value.avatar;
        // console.log(userData.value);
    } catch (error) {
        console.log("error " + error);
    }
};

function toggleNavbar() {
    const hamMenu = document.querySelector('#hamburger-menu');
    hamMenu.classList.toggle('active');
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
}

onMounted(() => {
    getUserData();
});
</script>

<template>
    <div class="navbar">
        <router-link :to="{ name: 'home' }">
            <img :src="NorthExpoLogo" alt="North Expo Logo" id="logo">
        </router-link>
        <nav class="nav-links">
            <ul>
                <li><router-link to="/" class="underline">Beranda</router-link></li>
                <li><router-link to="/destinasi" class="underline">Destinasi</router-link></li>
                <li><router-link to="/tiket" class="underline">Informasi Umum</router-link></li>
                <li><router-link to="/map" class="underline">Peta Wisata</router-link></li>
            </ul>
        </nav>

        <div id="hamburger-menu">
            <div id="toggle" @click="toggleNavbar()"></div>
        </div>

        <div class="navigation">
            <ul>
                <li><router-link to="/" class="underline">Beranda</router-link></li>
                <li><router-link to="/destinasi" class="underline">Destinasi</router-link></li>
                <li><router-link to="/tiket" class="underline">Informasi Umum</router-link></li>
                <li><router-link to="/map" class="underline">Peta Wisata</router-link></li>
                <div v-if="isLoggedIn">
                    <li><router-link to="/profile" class="underline">Profile</router-link></li>
                </div>
                <div v-else>
                    <li><router-link to="/login" class="underline action">Masuk</router-link></li>
                    <li><router-link to="/register" class="underline action">Daftar</router-link></li>
                </div>
            </ul>
        </div>

        <div class="nav-action">
            <div class="user-profile" v-if="isLoggedIn">
                <div class="profile">
                    <!-- <p>Halo, {{ username.user.name }}</p> -->
                    <p>Halo, {{ username }}</p>
                    <!-- get img avatar from username.user.avatar -->
                    <img :src="'https://admin.api.northexpokudus.com/assets/img/avatar/' + useravatar" alt="user avatar"
                        @click="showProfileOverlay()">
                </div>
                <div class="profile-overlay">
                    <ul>
                        <li><router-link to="/profile" class="underline">Profil</router-link></li>
                        <li>
                            <a @click="showPopup">Logout</a>
                            <LogoutPopup :visible="showLogoutPopup" @cancel="hidePopup" @confirm="performLogout" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="action" v-else>
                <router-link to="/login" class="underline">Masuk</router-link>
                <button @click="showRegister">Daftar</button>
            </div>
        </div>
    </div>
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
    text-align: center;
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

.navbar #hamburger-menu #toggle {
    position: relative;
	width: 30px;
	height: 30px;
	cursor: pointer;
    z-index: 100;
    display: none;
}

.navbar #hamburger-menu #toggle::before {
    content: '';
	position: absolute;
	top: 10px;
	width: 100%;
	height: 3px;
	background: #000;
    border-radius: 5px;
}

.navbar #hamburger-menu #toggle::after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 3px;
    background: #000;
    border-radius: 5px; 
}

.navbar #hamburger-menu.active #toggle::before {
    top: 50%;
	left: 80%;
	transform: translate(-50%,-50%) rotate(45deg);
    transition: .3s;
}

.navbar #hamburger-menu.active #toggle::after {
    top: 50%;
	left: 80%;
	transform: translate(-50%,-50%) rotate(-45deg);
    transition: .3s;
}

.navbar .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 80px;
    background-color: #fff;
    transform: translateY(-100%);
    transition: 600ms;
    z-index: 99;
    display: none;
    justify-content: center;
    align-items: center;
}

.navbar .navigation.active {
    transform: translateY(0);
}

.navigation ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.navigation ul li {
    list-style: none;
    margin-bottom: 20px;
}

.navigation ul li a {
    text-decoration: none;
    color: var(--color-theme-950);
    font-size: 32px;
    font-weight: 700;
}

.navigation ul li a.action {
    color: var(--color-theme-400);
}

/* responsive tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    .navbar {
        padding: 0 50px;
    }

    .navbar #logo {
        z-index: 100;
    }

    .navbar .nav-links {
        display: none;
    }

    .nav-action {
        display: none;
    }

    .navbar #hamburger-menu #toggle {
        display: block;
    }

    .navbar .navigation {
        display: flex;
    }
}

/* responsive handphone */
@media screen and (max-width: 768px) {
    .navbar {
        padding: 0 30px;
    }

    .navbar #logo {
        z-index: 100;
    }

    .navbar .nav-links {
        display: none;
    }

    .nav-action {
        display: none;
    }

    .navbar #hamburger-menu #toggle {
        display: block;
    }

    .navbar .navigation {
        display: flex;
        padding: 0 30px 0 0;
    }

    .navigation ul li a {
        font-size: 24px;
    }
}

</style>