<template>
    <div class="container" v-for="(wisata, index) in destinasi.data" :key="index">
        <router-link :to="{ name: 'detail-destinasi', params: { id: wisata.id } }">
            <img :src="'https://admin.api.northexpokudus.com/foto/' + wisata.foto" alt="gambar">
            <div class="category">
                <p>{{ wisata.kategori.nama }}</p>
            </div>
            <div class="card-title">
                <div class="wrapper">
                    <p id="title">{{ wisata.nama }}</p>
                </div>
                <div class="lokasi">
                    <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" size="xl" />
                    <div class="loc">
                        <p>{{ wisata.alamat }}</p>
                    </div>
                </div>
            </div>
            <div class="black-liner"></div>
        </router-link>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import LocationIcon from './icons/IconLocation.vue'

export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
    setup() {
        let destinasi = ref([]);

        onMounted(async () => { 
            axios.get('https://admin.api.northexpokudus.com/api/destinasi')
                .then((response) => {
                    destinasi.value = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        });

        return {
            destinasi
        }
    }
}

</script>

<style scoped>
.container a {
    width: 400px;
    height: 400px;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin: 1rem;
}

.container a img {
    width: 100%;
    height: 100%;
    transition: 0.5s all ease-out;
}

.container a:hover  img {
    transform: scale(1.5);
}



.category {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
    position: absolute;
    top: 0;
    right: 0;
}

.category button {
    width: 2rem;
    height: 2rem;
    border-radius: 10%;
    background-color: #61832d;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.category button .plus-icon {
    color: #fff;
    font-size: 1rem;
}

.category p {
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: #61832d;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
}

.card-title {
    width: 100%;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
}

.card-title p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
    color: #fff;
}

.card-title .lokasi {
    display: flex;
    /* align-items: center; */
}

.card-title .lokasi .loc {
    overflow: hidden;
    margin-right: 20px;
}

.card-title .lokasi .icon {
    margin-right: 0.5rem;
    color: #15ACC5;
    width: 100px;
}

.card-title .lokasi p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: #fff;
    background-color: transparent;
    white-space: nowrap;
    transform: translateX(0);
    animation: marqueeLocation 30s linear infinite;
}

.black-liner {
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
}

@keyframes marqueeLocation {
    0% {
        transform: translateX(0);
    }

    10% {
        transform: translateX(0);
    }

    60% {
        transform: translateX(calc(-100% - 200px));
    }

    70% {
        transform: translateX(calc(-100% - 200px));
    }

    100% {
        transform: translateX(0);
    }
}
</style>