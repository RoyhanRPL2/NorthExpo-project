<script setup>
import { ref, onMounted } from 'vue'
import LocationIcon from './icons/IconLocation.vue'

const destination = ref([
    {
        id: 1,
        name: 'Gunung Muria',
        description:
            'Gunung Muria adalah sebuah gunung yang terletak di Jawa Tengah, Indonesia. Gunung ini memiliki ketinggian 1.602 mdpl. Gunung ini terletak di perbatasan Kabupaten Kudus, Kabupaten Pati, dan Kabupaten Jepara.',
        link: 'https://id.wikipedia.org/wiki/Gunung_Muria',
        // image: 'https://d.top4top.io/p_2683odzq93.png'
        // image: 'https://k.top4top.io/p_2689vj2u31.png'
        // image: 'https://d.top4top.io/p_2689utbyb1.jpg'
        image: 'https://f.top4top.io/p_2689r82561.png'
    },
    {
        id: 2,
        name: 'Waterpark Mulia Wisata',
        description:
            'Waterpark Mulia Wisata adalah sebuah tempat wisata yang terletak di Desa Kedungrejo, Kecamatan Dawe, Kabupaten Kudus, Jawa Tengah. Tempat wisata ini memiliki luas sekitar 2 hektar dan memiliki berbagai macam wahana permainan.',
        link: 'https://id.wikipedia.org/wiki/Waterpark_Mulia_Wisata',
        image: 'https://c.top4top.io/p_2683716gn2.png'
    },
    {
        id: 3,
        name: 'The Hills Vaganza',
        description:
            'The Hills Vaganza adalah sebuah tempat wisata yang terletak di Desa Kedungrejo, Kecamatan Dawe, Kabupaten Kudus, Jawa Tengah. Tempat wisata ini memiliki luas sekitar 2 hektar dan memiliki berbagai macam wahana permainan.',
        link: 'https://id.wikipedia.org/wiki/The_Hills_Vaganza',
        image: 'https://b.top4top.io/p_2683npv2g1.png'
    },
    {
        id: 4,
        name: 'Desa Japan',
        description:
            'Desa Japan adalah sebuah desa di kecamatan Dawe, Kudus, Jawa Tengah, Indonesia. Desa ini berjarak sekitar 5 Km dari pusat kecamatan Dawe atau 15 Km dari pusat kota Kudus ke arah barat. Desa ini terkenal dengan kerajinan anyaman bambu dan kerajinan rotan.',
        link: 'https://id.wikipedia.org/wiki/Desa_Japan,_Dawe,_Kudus',
        image: 'https://d.top4top.io/p_2683odzq93.png'
    },
    {
        id: 5,
        name: 'Makam Sunan Muria',
        description:
            'Makam Sunan Muria adalah makam yang terletak di lereng Gunung Muria, tepatnya di Desa Kembang, Kecamatan Dawe, Kabupaten Kudus, Jawa Tengah. Makam ini merupakan makam dari Sunan Muria, salah satu wali Songo yang menyebarkan agama Islam di Pulau Jawa.',
        link: 'https://id.wikipedia.org/wiki/Makam_Sunan_Muria',
        image: 'https://c.top4top.io/p_2683716gn2.png'
    },
    {
        id: 6,
        name: 'Susu Moeria',
        description:
            'Susu Moeria adalah sebuah perusahaan susu yang berdiri sejak tahun 1958 di Kudus, Jawa Tengah. Susu Moeria merupakan salah satu perusahaan susu tertua di Indonesia.',
        link: 'https://id.wikipedia.org/wiki/Susu_Moeria',
        image: 'https://b.top4top.io/p_2683npv2g1.png'
    }
])

const currentIndex = ref(0)

// create change card size function for card-container currentIndex
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

// onmounted all
onMounted(() => {
// set interval all 6000
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

const moveCardWrapper1 = () => {
    const cardWrapper = document.querySelectorAll('.card-wrapper')
    cardWrapper.forEach((item, index) => {
        if (index === 1) {
            item.style.transform = 'translateX(-500px)'
            item.style.transition = '.5s'
        } else {
            item.style.transform = 'translateX(-500px)'
            item.style.transition = '.5s'
        }
    })
}

const moveCardWrapper2 = () => {
    const cardWrapper = document.querySelectorAll('.card-wrapper')
    cardWrapper.forEach((item, index) => {
        if (index === 2) {
            item.style.transform = 'translateX(-850px)'
            item.style.transition = '.5s'
        } else {
            item.style.transform = 'translateX(-850px)'
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

</script>

<template>
    <div class="card-container">
        <div v-for="index in 3" :key="index" class="card-wrapper">
            <div class="card">
                <div class="card-bg"></div>
                <img :src="destination[index - 1].image" alt="">
                <div class="category">
                    <h3>wisata alam</h3>
                </div>
                <div class="card-title">
                    <h1>{{ destination[index - 1].name }}</h1>
                    <div class="location">
                        <LocationIcon />
                        <p>Ds. Ketapang</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="index in 3" :key="index" class="card-wrapper">
            <div class="card">
                <div class="card-bg"></div>
                <img :src="destination[index - 1].image" alt="">
                <div class="category">
                    <h3>wisata alam</h3>
                </div>
                <div class="card-title">
                    <h1>{{ destination[index - 1].name }}</h1>
                    <div class="location">
                        <LocationIcon />
                        <p>Ds. Ketapang</p>
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
}

.card-title h1 {
    color: var(--color-theme-50);
    font-size: 22px;
    line-height: 1.3;
    margin-bottom: 10px;
}

.card-title .location {
    display: flex;
}

.card-title .location svg {
    margin-right: 10px;
}
</style>