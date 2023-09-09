<script setup>
import cardCulinary from '../components/cardCulinary.vue'
</script>
<template>
    <div class="container">
        <div class="culinary-title">
            <h4>Kuliner</h4>
            <h1>Beragam Referensi Makanan Kuliner</h1>
        </div>
        <div class="container-culinary">
            <cardCulinary />
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: fit-content;
    background-color: var(--color-theme-50);
    padding: 70px 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.container .container-culinary {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.container .culinary-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
}

.container .culinary-title h4 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary-500);
}

.container .culinary-title h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-theme-950);
    margin-top: 20px;
    margin-bottom: 40px;
    max-width: 600px;
    text-align: center;
}

@media (min-width: 768px) and (max-width: 1024px) {

}

@media screen and (max-width: 768px) {
    .container {
        padding: 50px 0px;
    }

    .container .culinary-title {
        padding: 0 40px;
    }

    .container .culinary-title h1 {
        font-size: 26px;
        margin-bottom: 0px;
    }
}
</style>