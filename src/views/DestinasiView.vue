<script setup>
import card from '../components/card.vue'
import footerComponent from '../components/footer.vue'
import headerComponent from '../components/HeaderComponent.vue' 
import searchComponent from '../components/SearchComponent.vue'
</script>

<template>
    <headerComponent />
    <div class="hero">
        <img src="https://images.unsplash.com/photo-1542380309-1234f067f28e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM3NzMyMTZ8&ixlib=rb-4.0.3&q=85"
            alt="">
        <div class="black-linear"></div>
        <div class="title-wrapper">
            <h1>Destinasi Wisata</h1>
            <p>NorthExpo</p>
        </div>
        <div class="search-wrapper">
            <searchComponent />
        </div>
    </div>
    <div class="main">
        <card />
    </div>

    <footer>
        <footerComponent />
    </footer>
    
</template>

<style scoped>
.hero {
    width: 100%;
}

.hero img {
    width: 100%;
    height: 55vh;
    object-fit: cover;
    position: relative;
}

.hero .black-linear {   
    /* more darker */
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
}

.hero .title-wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
}

.hero .title-wrapper h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
}

.hero .title-wrapper p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary-400);
}

.hero .search-wrapper {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 5rem 0;
}

footer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 768px) {
    .hero .title-wrapper {
        top: 50%;
    }

    .hero .search-wrapper {
        top: 90%;
    }
}

@media screen and (max-width: 425px) {
    .hero .title-wrapper {
        top: 60%;
    }

    .hero .search-wrapper {
        top: 100%;
    }
}
</style>