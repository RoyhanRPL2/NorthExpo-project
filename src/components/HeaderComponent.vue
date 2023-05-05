<script setup>
    import NorthExpoLogo from '../assets/images/logo.png'
    // import GunungMuria from '../assets/images/gunung-muria.png'
    import { ref } from 'vue'
    const isLoggedIn = ref(false)
</script>

<template>
    <div class="navbar">
        <img :src="NorthExpoLogo" alt="North Expo Logo" id="logo">

        <nav class="nav-links">
            <ul>
                <li><a href="#" class="underline">Beranda</a></li>
                <li><a href="#about-us" class="underline">Tentang Kami</a></li>
                <li><a href="/destination" class="underline">Destinasi</a></li>
                <li><a href="/tourist-map" class="underline">Peta Wisata</a></li>
            </ul>
        </nav>

        <div class="nav-action">
            <div class="user-profile" v-if="isLoggedIn">Hello, User</div>
            <div class="action" v-else>
                <a href="#" class="underline">Masuk</a>
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

    .nav-links ul li a, a {
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

    .underline, .nav-action .action {
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