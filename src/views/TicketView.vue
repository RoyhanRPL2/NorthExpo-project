<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
</script>
<template>
    <HeaderComponent />
    <div class="container">
        <h1>Informasi Umum <br>belum tersedia</h1>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    color: var(--color-primary-700);
    line-height: 1.3;
}
</style>