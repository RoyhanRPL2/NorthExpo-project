<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import card from '../components/card.vue'
import footerComponent from '../components/footer.vue'
import headerComponent from '../components/HeaderComponent.vue'
import searchComponent from '../components/SearchComponent.vue'

const destinations = ref([]);

function showDestinations(result) {
    destinations.value = result;
}

onMounted(async () => {
    const response = await axios.get('https://admin.api.northexpokudus.com/api/destinasi');
    destinations.value = response.data.data;
});
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
            <searchComponent @search-results="showDestinations" />
        </div>
    </div>
    <div class="main-container">
        <div v-if="destinations.length > 0" class="main">
            <div class="container" v-for="destination in destinations" :key="destination.id"  :style="{ backgroundImage: 'url(https://admin.api.northexpokudus.com/foto/' + destination.foto + ')' }">
                <router-link :to="{ name: 'detail-destinasi', params: { id: destination.id } }" class="link">
                    <!-- <img :src="'https://admin.api.northexpokudus.com/foto/' + wisata.foto" alt="gambar"> -->
                    <div class="category">
                        <p>{{ destination.kategori.nama }}</p>
                    </div>
                </router-link>
                <div class="card-title">
                    <div class="wrapper">
                        <p id="title">{{ destination.nama }}</p>
                    </div>
                    <div class="lokasi">
                        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" size="xl" />
                        <div class="loc">
                            <p>{{ destination.alamat }}</p>
                        </div>
                    </div>
                </div>
                <div class="black-liner"></div>
            </div>
        </div>
        <div v-else>
            <p class="data-kosong">Tidak ada destinasi yang ditemukan.</p>
        </div>
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

.main-container {
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
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

.container {
    width: 400px;
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-bottom: 3.5rem;
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

.data-kosong {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-primary-600);
    text-align: center;
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

@media screen and (max-width: 870px) {
    .main-container {
        padding: 0 2rem;
    }

    .main {
        padding: 2rem 2rem;
    }

    .container {
        width: 100%;
        height: 300px;
    }
}


@media screen and (max-width: 768px) {
    .hero .title-wrapper {
        top: 50%;
    }

    .hero .search-wrapper {
        top: 70%;
    }

    .main-container {
        padding: 0 2rem;
    }

    .main {
        padding: 2rem 0;
    }

    .container {
        width: 100%;
        height: 300px;
    }

    .card-title p {
        font-size: 1.5rem;
    }

    .card-title .lokasi p {
        font-size: 0.8rem;
    }

    .data-kosong {
        font-size: 1rem;
    }
}

@media screen and (max-width: 425px) {
    .hero .title-wrapper {
        width: 100%;
    }

    .hero .title-wrapper h1 {
        width: 100%;
        font-size: 1.7rem;
    }

    .hero .title-wrapper p {
        font-size: 1rem;
    }

    .hero .search-wrapper {
        top: 70%;
    }

    .main {
        padding: 2rem 0;
    }

    .container {
        width: 100%;
        height: 300px;
    }

    .card-title p {
        font-size: 1.5rem;
    }

    .card-title .lokasi p {
        font-size: 0.8rem;
    }

    .data-kosong {
        font-size: 1rem;
    }

    .main {
        padding: 2rem 0;
    }

}

@media screen and (max-width: 376px) {
    .hero .title-wrapper {
        width: 100%;
    }

    .hero .title-wrapper h1 {
        width: 100%;
        font-size: 1.5rem;
    }

    .hero .title-wrapper p {
        font-size: 0.8rem;
    }

    .hero .search-wrapper {
        top: 70%;
    }

    .main-container {
        padding: 0 1rem;
    }

    .main {
        padding: 2rem 0;
    }

    .container {
        width: fit-content;
        height: 300px;
    }

    .card-title p {
        font-size: 1.5rem;
    }

    .card-title .lokasi p {
        font-size: 0.8rem;
    }

    .data-kosong {
        font-size: 1rem;
    }
}
</style>