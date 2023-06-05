<script setup>
import SearchIcon from './icons/IconSearch.vue'
import { ref, computed } from 'vue';

const places = ref([
    { id: 1, name: "Gunung Muria", category: "Wisata Alam", region: "Muria" },
    { id: 2, name: "Makam Sunan Muria", category: "Wisata Religi", region: "Muria" },
    { id: 3, name: "The Hills Vaganza", category: "Outdoor", region: "Dawe" },
    { id: 4, name: "Desa Japan", category: "Desa Wisata", region: "Japan" },
    { id: 5, name: "Waterpark Mulia Wisata", category: "Outdoor", region: "Dawe" },
    { id: 6, name: "Susu Moeria", category: "Wisata Edukasi", region: "Muria" }
]);
const categories = ref([
`   { id: 1, name: "Wisata Budaya" },
    { id: 2, name: "Wisata Alam" },
    { id: 3, name: "Wisata Religi" },
    { id: 4, name: "Desa Wisata" },
    { id: 5, name: "Outdoor" }`
]);
const regions = ref([
    { id: 1, name: "Muria" },
    { id: 2, name: "Japan" },
    { id: 3, name: "Dawe" }
]);
const selectedCategory = ref("");
const selectedRegion = ref("");
const searchQuery = ref("");

const filteredPlaces = computed(() => {
    return places.value.filter(place => {
        let categoryMatch = true;
        let regionMatch = true;
        let searchMatch = true;

        if (selectedCategory.value) {
            categoryMatch = place.category === selectedCategory.value;
        }

        if (selectedRegion.value) {
            regionMatch = place.region === selectedRegion.value;
        }

        if (searchQuery.value) {
            const searchRegex = new RegExp(searchQuery.value, "i");
            searchMatch = Object.values(place).some(value => searchRegex.test(value));
        }

        return categoryMatch && regionMatch && searchMatch;
    });
});
</script>

<template>
    <div class="search-container">
        <div>
            <select id="category-filter" v-model="selectedCategory">
                <option value="">Kategori</option>
                <option v-for="category in categories" :key="category.id" :value="category.name" class="option">{{
                    category.name }}</option>
            </select>
        </div>
        <span class="line"></span>
        <div>
            <select id="region-filter" v-model="selectedRegion">
                <option value="">Wilayah</option>
                <option v-for="region in regions" :key="region.id" :value="region.name" class="option">{{ region.name }}
                </option>
            </select>
        </div>
        <span class="line"></span>
        <div class="search">
            <input type="text" v-model="searchQuery" placeholder="Cari destinasi wisata...">
        </div>
        <!-- add search icon -->
        <div class="btn-search">
            <SearchIcon />
        </div>
    </div>
    <ul>
        <li v-for="place in filteredPlaces" :key="place.id">{{ place.name }} - {{ place.category }} - {{ place.region }}
        </li>
    </ul>
</template>

<style scoped>
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
}
</style>