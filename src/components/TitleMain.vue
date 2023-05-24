<script setup>
// create data list for destination with data id, name, description, and link destination. data name is Gunung Muria, Makam Sunan Muria, The Hills Vaganza, Desa Japan, Waterpark Mulia Wisata, and Susu Moeria
import { ref, onMounted } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import SearchComponent from '../components/SearchComponent.vue'
import CardMain from '../components/CardMain.vue'

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

onMounted(() => {
    setInterval(changeDestination, 6000)
})

</script>

<template>
    <HeaderComponent />
    <CardMain />
    <div class="destination-image">
        <img :src="destination[currentIndex].image" alt="destination" />
        <div class="search">
            <SearchComponent />
        </div>
    </div>
    <div class="container">
        <div class="destination-title">
            <h1>{{ destination[currentIndex].name }}</h1>
            <p>{{ destination[currentIndex].description }}</p>
            <a :href="destination[currentIndex].link" target="_blank">Jelajahi Sekarang</a>
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
    opacity: 0.5;
}

.destination-title {
    max-width: 40%;
    background-color: transparent;
}

.destination-title h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--color-theme-50);
    margin-bottom: 30px;
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