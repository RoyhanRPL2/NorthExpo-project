<script setup>
import { onMounted } from 'vue'
import HeaderComponents from '../components/HeaderComponent.vue'
import mapComponent from '../components/map.vue'
import category from '../components/categorySection.vue'
import footerComponent from '../components/footer.vue'
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

    <footer>
        <footerComponent></footerComponent>
    </footer>
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
    padding:  6rem 9rem;
}

h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: #333;
}

.wrapper {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 1024px) {
    .container {
        padding: 6rem 4rem;
    }

    .wrapper {
        flex-direction: column;
    }
}

@media screen and (max-width: 768px) {
    .container {
        padding: 6rem 1.5rem;
    }

    .wrapper {
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
    }
}
</style>