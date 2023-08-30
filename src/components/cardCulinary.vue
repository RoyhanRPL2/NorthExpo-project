<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
    setup() {
        let kuliner = ref([]);

        onMounted(async () => { 
            axios.get('https://admin.api.northexpokudus.com/api/kuliner')
                .then((response) => {
                    kuliner.value = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });

                console.log(kuliner);
        });

        return {
            kuliner
        }
    }
}
</script>

<template>
    <div class="container-card" v-for="(kuliner, index) in kuliner.data" :key="index">
        <router-link :to="{ name: 'detail-kuliner', params: { id: kuliner.id } }">
            <img :src="'https://admin.api.northexpokudus.com/kuliner/' + kuliner.foto2" alt="gambar">
            <div class="card-title">
                <h1>{{ kuliner.nama_kuliner }}</h1>
                <p>{{ kuliner.nama_warung }}</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.container-card {
    width: 500px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    background-color: aqua;
    margin: 30px;
}

.container-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: center;
    transition: .5s;
}

.container-card:hover img {
    transform: scale(1.1);
}

.container-card .card-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
}

.card-title h1 {
    color: var(--color-theme-50);
    font-size: 26px;
    font-weight: 600;
}

.card-title p {
    color: var(--color-theme-50);
    font-size: 16px;
    font-weight: 300;
}
</style>