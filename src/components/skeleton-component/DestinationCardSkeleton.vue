<template>
    <div class="container">
        <div class="category">
            <PlaceholderAnimation width="150px" />
        </div>
        <div class="card-title">
            <div class="wrapper">
                <PlaceholderAnimation width="50%" height="50%"/>
            </div>
            <div class="lokasi">
                <PlaceholderAnimation class="icon" width="20%"/>
                <PlaceholderAnimation width="100%" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PlaceholderAnimation from '../PlaceholderAnimation.vue';
</script>

<style scoped>
.container {
    width: 400px;
    height: 400px;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    background-color: #e6e6e6;
}

.container .category {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0.8rem;
    position: absolute;
    top: 0;
    right: 0;
}

.container .card-title {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0.8rem;
}

.container .card-title .wrapper {
    width: 100%;
    height: 80%;
}

.container .card-title .lokasi {
    width: 100%;
    height: 50%;
    padding: 0.4rem 0;
    display: flex;
}

.container .card-title .lokasi .icon {
    margin-right: 0.5rem;
}
</style>