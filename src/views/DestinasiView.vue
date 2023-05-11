<script setup>
import card from '../components/card.vue'
import footerComponent from '../components/footer.vue'
</script>

<template>
    <div class="hero">
        <img src="https://images.unsplash.com/photo-1542380309-1234f067f28e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM3NzMyMTZ8&ixlib=rb-4.0.3&q=85">
    </div>
    
        alt="">
    <div class="main">
        <card />
        <card />
        <card />
    </div>

    <footerComponent />
</template>

<style>
.hero {
    width: 100%;
}

.hero img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
}


.main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

}
</style>