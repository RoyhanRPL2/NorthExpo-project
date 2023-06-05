<template>
    <div class="additional-data">
        <div class="nearest-destination">
            <h2>Destinasi Terdekat</h2>
            <ul class="destination-list" @click="refreshPage()" v-for="(wisata2, index) in loopData()" :key="index">
                <li>
                    <h3>{{ wisata2.nama }}</h3>
                    <!-- create right arrow icon wrapped with router link  -->
                    <router-link :to="{ name: 'detail-destinasi', params: { id: wisata2.id } }">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" size="xl"/>
                    </router-link>
                    
                </li>
            </ul>
        </div>
        <span class="separator-line"></span>
        <div class="nearest-restaurant">
            <h2>Warung Terdekat</h2>
            <ul class="restaurant-list">
                <li>
                    <h3>Ayam Pak Gembus</h3>
                    <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" size="xl"/>
                </li>
                <li>
                    <h3>Ayam Pak Gembus</h3>
                    <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" size="xl"/>
                </li>
                <li>
                    <h3>Ayam Pak Gembus</h3>
                    <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" size="xl"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

export default {
    data() {
        return {
            destinasi: ref([])
        }
    },
    methods: {
        loopData() {
            return this.destinasi.slice(0, 3)
        },
        refreshPage() {
            window.location.reload()
        }
    },
    mounted() {
        axios.get('https://admin.api.northexpokudus.com/api/destinasi')
            .then((response) => {
                this.destinasi = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>


<style scoped>
.container {
    width: 100%;
    padding: 5rem 6rem;
}

.container .additional-data {
    width: 100%;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container .additional-data .nearest-destination {
    width: 40%;
}

.container .additional-data .nearest-destination h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-theme-950);
}

.container .additional-data .nearest-destination .destination-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.container .additional-data .nearest-destination .destination-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
}

.container .additional-data .nearest-destination .destination-list li h3 {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin: 0;
}

.container .additional-data .separator-line {
    width: 1px;
    height: 12rem;
    border: 2px solid var(--color-theme-950);
}

.container .additional-data .nearest-restaurant {
    width: 40%;
}

.container .additional-data .nearest-restaurant h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-theme-950);
}

.container .additional-data .nearest-restaurant .restaurant-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.container .additional-data .nearest-restaurant .restaurant-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
}

.container .additional-data .nearest-restaurant .restaurant-list li h3 {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin: 0;
}

.container .additional-data .nearest-restaurant .restaurant-list li .icon {
    color: var(--color-theme-950);
}
</style>


