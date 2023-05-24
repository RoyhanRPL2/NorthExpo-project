<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import footerComponent from '../components/footer.vue'
import router from '../router/index.js'
import { ref, computed } from 'vue';

const Muria = ref({
    nama: 'Gunung Muria',
    img: ['https://images.unsplash.com/photo-1518070588484-2b53926cba76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1536077891673-5a03ebcd8ebe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1585357214259-f977cc7d73a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', 'https://images.unsplash.com/photo-1616813387346-12ffa5dc5e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80']
});

const changeImage = (img) => {
    var image = document.getElementById('img-box');
    image.src = img;
}

</script>

<template>
    <HeaderComponent />
    <br>
    <div id="detail" class="container">
        <div class="header">
            <p class="category">Wisata Alam</p>
            <h1>Gunung Muria</h1>
            <div class="lokasi">
                <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" size="xl" />
                <p> Desa Tempur, Keling, Kabupaten Jepara, Jawa Tengah</p>
            </div>
        </div>

        <div class="img-wrapper">
            <img id="img-box" src="https://images.unsplash.com/photo-1518070588484-2b53926cba76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="">
            <div class="img-list">
                <img v-for="img in Muria.img" :src="img" alt="" @click="changeImage(img)">
            </div>
        </div>

        <div class="description-container">
            <h1>Deskripsi Wisata</h1>
            <p>
                Gunung Muria adalah sebuah gunung yang terletak di Jawa Tengah, Indonesia. Gunung ini memiliki ketinggian sekitar 1.602 meter di atas permukaan laut dan terletak di sebelah barat laut Kota Kudus. Gunung Muria termasuk dalam kawasan Taman Nasional Gunung Muria, yang memiliki luas sekitar 62.000 hektar.

Gunung Muria memiliki lanskap yang indah dan beragam. Di puncak gunung ini terdapat hutan dengan berbagai jenis flora dan fauna endemik. Selain itu, terdapat juga beberapa air terjun yang cantik dan mata air yang jernih di sekitar gunung ini.
            </p>
        </div>

        <div class="map-container">
            <h1>Lokasi</h1>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.973195984625!2d110.88053354993292!3d-6.616666344038223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7127ef4fe437b5%3A0x27448829466e8cbc!2sMount%20Muria!5e0!3m2!1sen!2sid!4v1684898339474!5m2!1sen!2sid" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>

        <div class="additional-data">
            <div class="nearest-destination">
                <h2>Destinasi Terdekat</h2>
                <ul class="destination-list">
                    <li>
                        <h3>Waterboom Lau</h3>
                        <h3>0.3 KM</h3>
                    </li>
                    <li>
                        <h3>Waterboom Lau</h3>
                        <h3>0.3 KM</h3>
                    </li>
                    <li>
                        <h3>Waterboom Lau</h3>
                        <h3>0.3 KM</h3>
                    </li>
                </ul>
            </div>
            <span class="separator-line"></span>
            <div class="nearest-restaurant">
                <h2>Warung Terdekat</h2>
                <ul class="restaurant-list">
                    <li>
                        <h3>Ayam Pak Gembus</h3>
                        <h3>0.3 KM</h3>
                    </li>
                    <li>
                        <h3>Ayam Pak Gembus</h3>
                        <h3>0.3 KM</h3>
                    </li>
                    <li>
                        <h3>Ayam Pak Gembus</h3>
                        <h3>0.3 KM</h3>
                    </li>
                </ul>
            </div>
        </div>

        <div class="review-form">
            <h2>Ulasan</h2>
            <div class="rate">
                <p>Penilaian :</p>
                <div class="star-rate">
                    <font-awesome-icon class="icon" icon="fa-solid fa-star" size="xl" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-star" size="xl" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-star" size="xl" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-star" size="xl" />
                    <font-awesome-icon class="icon" icon="fa-solid fa-star" size="xl" />
                </div>
            </div>
            <div class="form">
                <form action="">
                    <div class="user-data">
                        <div class="form-group">
                            <label for="name">Nama</label>
                            <input type="text" name="name" id="name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="review">Ulasan</label>
                        <textarea name="review" id="review" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Kirim</button>
                </form>
            </div>
        </div>
    </div>
    <footer>
        <footerComponent />
    </footer>
</template>

<style scoped>
.container {
    width: 100%;
    padding: 5rem 8.5rem;
}

.container .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
}

.container .header .category {
    font-size: 1rem;
    color: var(--color-primary-500);
}

.container .header h1 {
    font-size: 4rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-theme-950);
}

.container .header .lokasi {
    display: flex;
    align-items: center;
}

.container .header .lokasi .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    color: var(--color-primary-500);
}

.container .header .lokasi p {
    font-size: 1rem;
    color: var(--color-theme-950);
}

.container .img-wrapper {
    width: 100%;
    padding: 2rem 1rem;
    position: relative;
}

.container .img-wrapper img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: 10px;
}

.container .img-wrapper #img-box {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.container .img-wrapper .img-list {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
}

.container .img-wrapper .img-list img {
    width: 15%;
    height: 6rem;
    object-fit: cover;
    margin-right: 0.7rem;
    cursor: pointer;
}

.container .description-container {
    width: 100%;
    padding: 2rem 3rem;
}

.container .description-container h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-theme-950);
}

.container .description-container p {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin: 0.3rem 0;
    text-align: justify;
}

.container .map-container {
    width: 100%;
    padding: 2rem 3rem;
}

.container .map-container h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--color-theme-950);
}

.container .map-container .map {
    width: 100%;
    height: 30rem;
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

.container .review-form {
    width: 100%;
    padding: 2rem 3rem;
}

.container .review-form h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-theme-950);
}

.container .review-form .rate {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

.container .review-form .rate p {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin: 0;
}

.container .review-form .rate .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
    color: var(--color-primary-500);
}


.container .review-form .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
}

.container .review-form .form .user-data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.container .review-form .form .user-data .form-group {
    width: 48%;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
}

.container .review-form .form .user-data .form-group label {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin: 0;
}

.container .review-form .form .user-data .form-group input {
    width: 100%;
    height: 3rem;
    border: 1px solid var(--color-theme-950);
    padding: 0 0.5rem;
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-top: 1rem;
}

.container .review-form .form .form-group label {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin: 0;
}

.container .review-form .form .form-group textarea {
    width: 100%;
    height: 10rem;
    border: 1px solid var(--color-theme-950);
    padding: 0.5rem;
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-top: 1rem;
}

.container .review-form .form form button {
    width: 15%;
    height: 3rem;
    padding: 0 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-theme-50);
    margin-top: 1rem;
    background-color: var(--color-primary-500);
    cursor: pointer;
    border: none;
    border-radius: 5px;
}
</style>