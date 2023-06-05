<script setup>
// create data list for destination with data id, name, description, and link destination. data name is Gunung Muria, Makam Sunan Muria, The Hills Vaganza, Desa Japan, Waterpark Mulia Wisata, and Susu Moeria
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import SearchComponent from '../components/SearchComponent.vue'
import CardMain from '../components/CardMain.vue'

const destination = ref([])
const dataFoto = ref([])
const dataNama = ref([])
const dataDeskripsi = ref([])
const dataMaps = ref([])
const currentIndex = ref(0)
const destinasiId = ref([])

onMounted(async () => {
    const response = await axios.get('https://admin.api.northexpokudus.com/api/destinasi')
    destination.value = response.data.data

    // get data foto
    for (let i = 0; i < 3; i++) {
        dataFoto.value.push(destination.value[i].foto)
    }

    // get data nama
    for (let i = 0; i < 3; i++) {
        dataNama.value.push(destination.value[i].nama)
    }

    // get data deskripsi
    for (let i = 0; i < 3; i++) {
        dataDeskripsi.value.push(destination.value[i].deskripsi)
    }

    // get data maps
    for (let i = 0; i < 3; i++) {
        dataMaps.value.push(destination.value[i].maps)
    }

    // get destinasi  id
    for (let i = 0; i < 3; i++) {
        destinasiId.value.push(destination.value[i].id)
    }

    // only show max 3 index
    const changeDestination = () => {
        if (currentIndex.value < 2) {
            currentIndex.value++
        } else {
            currentIndex.value = 0
        }

        // add animation fadeIn
        const destinationTitle = document.querySelector('.destination-title h1')
        const destinationDescription = document.querySelector('.destination-title p')
        const destinationLink = document.querySelector('.destination-title a')
        destinationTitle.classList.add('fadeIn')
        destinationDescription.classList.add('fadeIn')
        destinationLink.classList.add('fadeIn')
        setTimeout(() => {
            destinationTitle.classList.remove('fadeIn')
            destinationDescription.classList.remove('fadeIn')
            destinationLink.classList.remove('fadeIn')
        }, 600)
    }

    setInterval(changeDestination, 6000)
})


</script>

<template>
    <HeaderComponent />
    <CardMain />
    <div class="destination-image">
        <img :src="'https://admin.api.northexpokudus.com/foto/'+dataFoto[currentIndex]" alt="destination" />
        <div class="search">
            <SearchComponent />
        </div>
    </div>
    <div class="container">
        <div class="destination-title">
            <h1>{{ dataNama[currentIndex] }}</h1>
            <p>{{ dataDeskripsi[currentIndex] }}</p>
            <a :href="'/detail/'+destinasiId[currentIndex]">Jelajahi Sekarang</a>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    padding: 0 100px;
    display: flex;
    align-items: center;
}

.destination-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
}

.destination-image .search {
    bottom: 120px;
    z-index: 1;
}

.destination-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.4;
}

.destination-title {
    max-width: 40%;
    background-color: transparent;
}

.destination-title h1 {
    font-size: 55px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--color-theme-50);
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.destination-title h1.fadeIn {
    animation: fadeIn 600ms;
}

.destination-title p {
    font-size: 16px;
    font-weight: 300;
    line-height: normal;
    color: var(--color-theme-50);
    margin-bottom: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-align: justify;
}

.destination-title p.fadeIn {
    animation: fadeIn 600ms;
}

.destination-title a {
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    color: var(--color-theme-50);
    text-decoration: none;
    padding: 12px 18px;
    background-color: var(--color-primary-500);
    border-radius: 7px;
    transition: 600ms;
}

.destination-title a.fadeIn {
    animation: fadeIn 600ms;
}

.destination-title a:hover {
    background-color: var(--color-primary-700);
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>