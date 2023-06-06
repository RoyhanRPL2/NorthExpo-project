<script setup>
import SearchIcon from '../components/icons/IconSearch.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

const kategori = ref([]);
const destinasi = ref([]);
const searchQuery = ref("");
const selectedCategory = ref("");

onMounted(async () => {
    axios.get('https://admin.api.northexpokudus.com/api/destinasi')
        .then((response) => {
            destinasi.value = response.data;
            kategori.value = response.data; 
        })
        .catch((error) => {
            console.log(error);
        });
});

function handleSearch(){
    alert(selectedCategory.value + " " + searchQuery.value);
}


</script>

<template>
    <!-- <h1 v-for="(wisata, index) in destinasi.data" :key="index">{{ wisata.nama }}</h1>
    <h1 v-for="(wisata, index) in kategori.data" :key="index">{{ wisata.kategori.nama }}</h1> -->
    <div class="search-container">
        <div>
            <select id="category-filter" v-model="selectedCategory">
                <option value="">Kategori</option>
                <option v-for="(wisata, index) in kategori.data" :key="index" :value="wisata.kategori.nama" class="option">{{
                    wisata.kategori.nama }}</option>
            </select>
        </div>
        <span class="line"></span>
        <div>
            <select id="region-filter">
                <option value="">Wilayah</option>
                <option value="Wilayah" class="option"></option>
            </select>
        </div>
        <span class="line"></span>
        <div class="search">
            <input type="text" v-model="searchQuery" placeholder="Cari destinasi wisata...">
        </div>
        <!-- add search icon -->
        <div class="btn-search" @click="handleSearch()">
            <SearchIcon />
        </div>
    </div>
    <ul>
        <li v-for="place in filteredPlaces" :key="place.id">{{ place.name }} - {{ place.category }} - {{ place.region }}
        </li>
    </ul>
</template>

<style scoped>
h1 {
    color: red;
}
.search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 150px;
    margin: 0 auto;
}

.search-container .line {
    width: 1px;
    height: 25px;
    background-color: var(--color-theme-50);
    opacity: 0.3;
}

.search-container select {
    padding: 10px 50px;
    width: fit-content;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--color-theme-50);
    font-size: 16px;
    font-weight: 500;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
}

.search-container select option {
    background-color: var(--color-theme-50);
    font-size: 16px;
    font-weight: 500;
    color: var(--color-theme-950);
}

.search-container .search input {
    padding: 10px 50px;
    width: 270px;
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--color-theme-50);
    font-size: 16px;
    font-weight: 500;
}

.search-container .search input::placeholder {
    color: var(--color-theme-50);
    opacity: 0.3;
    font-size: 16px;
    font-weight: 500;
}

.search-container .btn-search {
    position: relative;
    cursor: pointer;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary-500);
    transition: 600ms;
}

.search-container .btn-search:hover {
    background-color: var(--color-primary-600);
}

.search-container .btn-search svg {
    width: 20px;
    height: 20px;
    fill: var(--color-theme-50);
}

ul li {
    color: var(--color-theme-50);
    font-size: 14px;
    font-weight: 400;
    display: none;
    /* float: left; */
}
</style>