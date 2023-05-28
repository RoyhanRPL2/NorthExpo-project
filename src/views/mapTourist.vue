<script setup>
import { onMounted } from 'vue'
import HeaderComponents from '../components/HeaderComponent.vue'
import mapComponent from '../components/map.vue'
import category from '../components/categorySection.vue'
</script>

<template>
    <header>
        <HeaderComponents />
    </header>
    
    <div class="container">
        <h1>Peta Wisata</h1>
        <div class="wrapper">    
            <mapComponent />
            <category />
        </div>
        
    </div>

</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

.container {
    height: 100%;
    padding:  5rem 9rem;
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 700;
    color: #333;
}

.wrapper {
    display: flex;
    justify-content: space-between;
}
</style>