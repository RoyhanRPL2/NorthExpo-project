<template>
    <div class="container" v-for="(wisata, index) in destinasi.data" :key="index"
        :style="{ backgroundImage: 'url(https://admin.api.northexpokudus.com/foto/' + wisata.foto + ')' }">
        <router-link :to="{ name: 'detail-destinasi', params: { id: wisata.id } }" class="link">
            <!-- <img :src="'https://admin.api.northexpokudus.com/foto/' + wisata.foto" alt="gambar"> -->
            <div class="category">
                <p>{{ wisata.kategori.nama }}</p>
            </div>
        </router-link>
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
.container {
    width: 400px;
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-content: space-between;
}

.link {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    height: 100%;
    text-decoration: none;
}

.container a .category {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.8rem;
    border-radius: 0 10px 0 10px;
    z-index: 1;
}

.container a .category p {
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
    color: #15ACC5;
    margin-right: 0.5rem;
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

@media screen and (max-width: 768px) {
    .container {
        width: 100%;
        height: 300px;
    }

    .card-title {
        padding: 0.5rem;
    }

    .card-title p {
        font-size: 1.2rem;
    }

    .card-title .lokasi p {
        font-size: 0.8rem;
    }

    .black-liner {
        height: 30%;
    }
}

@media screen and (max-width: 425px) {
    .container {
        width: 100%;
        height: 300px;
    }

    .card-title {
        padding: 0.5rem;
    }

    .card-title p {
        font-size: 1.2rem;
    }

    .card-title .lokasi p {
        font-size: 0.8rem;
    }

    .black-liner {
        height: 30%;
    }
}

@media screen and (max-width: 375px) {
    .container {
        width: 100%;
        height: 300px;
    }

    .card-title {
        padding: 0.5rem;
    }

    .card-title p {
        font-size: 1.2rem;
    }

    .card-title .lokasi p {
        font-size: 0.8rem;
    }

    .black-liner {
        height: 30%;
    }
}
</style>