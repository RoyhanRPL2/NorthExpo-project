<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import LocationIcon from './icons/IconLocation.vue'

const destination = ref([])
const dataFoto = ref([])
const dataNama = ref([])
const dataAlamat = ref([])
const dataKategori = ref([])
const currentIndex = ref(0)
const changeCardSize = () => {
    const card = document.querySelectorAll('.card')
    card.forEach((item, index) => {
        if (index === currentIndex.value) {
            item.style.width = '300px'
            item.style.height = '400px'
        } else {
            item.style.width = '240px'
            item.style.height = '340px'
        }
    })
}

const moveCardWrapper1 = () => {
    const cardWrapper = document.querySelectorAll('.card-wrapper')
    cardWrapper.forEach((item, index) => {
        if (index === 1) {
            item.style.transform = 'translateX(-450px)'
            item.style.transition = '.5s'
        } else {
            item.style.transform = 'translateX(-450px)'
            item.style.transition = '.5s'
        }
    })
}

const moveCardWrapper2 = () => {
    const cardWrapper = document.querySelectorAll('.card-wrapper')
    cardWrapper.forEach((item, index) => {
        if (index === 2) {
            item.style.transform = 'translateX(-800px)'
            item.style.transition = '.5s'
        } else {
            item.style.transform = 'translateX(-800px)'
            item.style.transition = '.5s'
        }
    })
}

const moveCardWrapper3 = () => {
    const cardWrapper = document.querySelectorAll('.card-wrapper')
    cardWrapper.forEach((item, index) => {
        if (index === 0) {
            item.style.transform = 'translateX(-1200px)'
            item.style.transition = '.8s'
        } else {
            item.style.transform = 'translateX(-1200px)'
            item.style.transition = '.8s'
        }
    })
}

const moveCardWrapperDefault = () => {
    const cardWrapper = document.querySelectorAll('.card-wrapper')
    cardWrapper.forEach((item, index) => {
        if (index === 0) {
            setTimeout(() => {
                item.style.transform = 'translateX(-100px)'
                item.style.transition = '0s'
                item.style.zIndex = '1'
            }, 400)
        } else {
            setTimeout(() => {
                item.style.transform = 'translateX(-100px)'
                item.style.transition = '0s'
                item.style.zIndex = '1'
            }, 400)
        }
    })
}

onMounted(async () => {
    const response = await axios.get('https://admin.api.northexpokudus.com/api/destinasi')
    destination.value = response.data.data

    // get data foto
    for (let i = 0; i < destination.value.length; i++) {
        dataFoto.value.push(destination.value[i].foto)
    }

    // get data nama
    for (let i = 0; i < destination.value.length; i++) {
        dataNama.value.push(destination.value[i].nama)
    }

    // get data alamat
    for (let i = 0; i < destination.value.length; i++) {
        dataAlamat.value.push(destination.value[i].alamat)
    }

    // get data kategori
    for (let i = 0; i < destination.value.length; i++) {
        dataKategori.value.push(destination.value[i].kategori.nama)
    }

    setInterval(() => {
        if (currentIndex.value === 0) {
            moveCardWrapper1()
            currentIndex.value = 1
            changeCardSize()
        } else if (currentIndex.value === 1) {
            moveCardWrapper2()
            currentIndex.value = 2
            changeCardSize()
        } else if (currentIndex.value === 2) {
            moveCardWrapperDefault()
            moveCardWrapper3()
            currentIndex.value = 0
            changeCardSize()
        }
    }, 6000)

})

</script>

<template>
    <div class="card-container">
        <div v-for="index in 3" :key="index" class="card-wrapper">
            <div class="card">
                <div class="card-bg"></div>
                <img :src="'https://admin.api.northexpokudus.com/foto/'+dataFoto[index-1]" alt="destination">
                <div class="category">
                    <h3>{{ dataKategori[index-1] }}</h3>
                </div>
                <div class="card-title">
                    <h1>{{ dataNama[index-1] }}</h1>
                    <div class="location">
                        <LocationIcon />
                        <div class="loc">
                            <p>{{ dataAlamat[index-1] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="index in 3" :key="index" class="card-wrapper">
            <div class="card">
                <div class="card-bg"></div>
                <img :src="'https://admin.api.northexpokudus.com/foto/'+dataFoto[index-1]" alt="destination">
                <div class="category">
                    <h3>{{ dataKategori[index-1] }}</h3>
                </div>
                <div class="card-title">
                    <h1>{{ dataNama[index-1] }}</h1>
                    <div class="location">
                        <LocationIcon />
                        <div class="loc">
                            <p>{{ dataAlamat[index-1] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    /* background-color: aqua; */
    position: absolute;
    right: 0;
    width: 60%;
    height: 100vh;
    display: flex;
    padding-left: 200px;
    /* justify-content: space-around; */
    align-items: center;
    overflow: hidden;
    z-index: 1;
}

.card-container .card-wrapper {
    transform: translateX(-100px);
}

.card-container .card {
    width: 270px;
    height: 370px;
    background-color: var(--color-primary-700);
    margin-right: 100px;
    transition: .5s;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.card .card-bg {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    position: absolute;
    z-index: 1;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .category {
    width: fit-content;
    height: fit-content;
    padding: 3px 8px;
    border-radius: 7px;
    background-color: var(--color-success-500);
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
}

.category h3 {
    color: var(--color-theme-50);
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
}

.card .card-title {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 20px;
    width: 100%;
}

.card-title h1 {
    color: var(--color-theme-50);
    font-size: 22px;
    line-height: 1.3;
    margin-bottom: 10px;
    width: 100%;
}

.card-title .location {
    display: flex;
}

.card-title .location .loc {
    overflow: hidden;
}

.card-title .location .loc p {
    white-space: nowrap;
    transform: translateX(0);
    animation: marqueeLocation 30s linear infinite;
}

.card-title .location svg {
    margin-right: 10px;
    width: 100px;
}

/* responsive tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    .card-container {
        display: none;
    }
}

/* responsive handphone */
@media screen and (max-width: 768px) {
    .card-container {
        display: none;
    }
}

@keyframes marqueeLocation {
    0% {
        transform: translateX(0);
    }

    10% {
        transform: translateX(0);
    }

    60% {
        transform: translateX(-250%);
    }

    70% {
        transform: translateX(-250%);
    }

    100% {
        transform: translateX(0);
    }
}
</style>