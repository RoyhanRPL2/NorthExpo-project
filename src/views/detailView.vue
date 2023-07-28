<template>
    <HeaderComponent />
    <br>
    <div id="Detail" class="container">

        <div class="header">
            <div class="category">{{ destinasi.data.kategori.nama }}</div>
            <h1>{{ destinasi.data.nama }}</h1>
            <div class="lokasi">
                <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" size="xl" />
                <p>{{ destinasi.data.alamat }}</p>
            </div>
            <div class="operasional">
                <font-awesome-icon class="icon" icon="fa-solid fa-clock" size="xl" />
                <p>{{ destinasi.data.operasional }}</p>
            </div>
        </div>

        <div>

        </div>

        <div class="img-wrapper">
            <img id="img-box" :src="'https://admin.api.northexpokudus.com/foto/' + destinasi.data.foto" alt="">
            <div class="img-list">
                <img :src="'https://admin.api.northexpokudus.com/foto/' + destinasi.data.foto2" alt="">
                <img :src="'https://admin.api.northexpokudus.com/foto/' + destinasi.data.foto3" alt="">
                <img :src="'https://admin.api.northexpokudus.com/foto/' + destinasi.data.foto4" alt="">
            </div>
        </div>

        <div class="description-container">
            <h1>Deskripsi Wisata</h1>
            <p>{{ destinasi.data.deskripsi }}</p>
        </div>

        <div class="map-container">
            <h1>Lokasi</h1>
            <div class="map">
                <iframe :src="destinasi.data.maps" width="100%" height="450" style="border:0;" allowfullscreen=""
                    loading="lazy"></iframe>
            </div>
        </div>

        <!-- additional data -->
        <additionalComponent></additionalComponent>

        <div class="ticket-wrapper">
            <DropdownTime :id="destinasi.data.id" v-if="destinasi.data.status"></DropdownTime>
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
                <form action="" @submit.prevent="postKomentar()">
                    <!-- <div class="user-data">
                        <div class="form-group">
                            <label for="name">Nama</label>
                            <input type="text" name="name" id="name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email">
                        </div>
                    </div> -->

                    <div class="form-group">
                        <label for="review">Ulasan</label>
                        <div class="form-nama">
                            <textarea name="review" id="review" cols="30" rows="10" v-model="komentar"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-outline-warning">Kirim</button>
                </form>
            </div>
        </div>

        <div class="review">
            <h2>Ulasan Pengunjung</h2>
            <div class="review-item" v-for="komentar in komentars" :key="komentar">
                <div class="user">
                    <img :src="`https://admin.api.northexpokudus.com/assets/img/avatar/` + komentar.user_id.avatar" alt="">
                    <div class="user-data">
                        <h3>{{ komentar.user_id.name }}</h3>
                    </div>
                </div>
                <div class="review-content">
                    <p>{{ komentar.komentar }}</p>
                </div>
            </div>

            <div class="no-comment" v-if="komentars.length == 0">
                <p>Belum ada ulasan</p>
            </div>
        </div>
    </div>
    <footer>
        <footerComponent />
    </footer>
</template>


<script setup>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import footerComponent from '../components/footer.vue';
import additionalComponent from '../components/AdditionalData.vue'
import DropdownTime from '../components/DropdownTime.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const destinasi = ref({
    data: {
        kategori: {
            nama: ''
        },
        nama: '',
        alamat: '',
        foto: '',
        foto2: '',
        foto3: '',
        foto4: '',
        deskripsi: '',
        maps: '',
        operasional: '',
        harga: '',
    }
});

const komentar = ref('');
const komentars = ref([]);

const route = useRoute();

// get komentars
async function getKomentars() {
    axios.get(`https://admin.api.northexpokudus.com/api/destinasi/komentar/${route.params.id}`)
        .then(response => {
            komentars.value = response.data.data;
            console.log(komentars.value);
        })
        .catch(error => {
            console.log(error);
        })
}

// post komentars
async function postKomentar() {
    const getUserInfo = localStorage.getItem('user-info');
    const userInfo = JSON.parse(getUserInfo);

    const token = userInfo.token;

    const config = {
        headers: { Authorization: "Bearer " + token }
    };
    console.log(config);
    const data = {
        komentar: komentar.value
    };
    axios.post(`https://admin.api.northexpokudus.com/api/destinasi/komentar/${route.params.id}`,
        data, config
    )
        .then(response => {
            console.log(response.data);
            this.komentar = '';
            this.getKomentars();
        })
        .catch(error => {
            console.log(error.response.data);
        });
}



onMounted(async () => {
    const response = await axios.get(`https://admin.api.northexpokudus.com/api/destinasi/${route.params.id}`);
    destinasi.value = response.data;
    postKomentar();
    getKomentars();
});

onMounted(() => {
    var imgList = document.querySelectorAll('.img-list img');

    imgList.forEach(function (img) {
        img.addEventListener('click', function () {
            document.getElementById('img-box').src = this.src;
        });
    });
}); 
</script>

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

.container .header .operasional {
    display: flex;
    align-items: center;
    margin-top: 1rem;
}

.container .header .operasional .icon {
    margin-right: 0.5rem;
    color: var(--color-primary-500);
}

.container .header .operasional p {
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

.container .ticket-wrapper {
    width: 100%;
    padding: 2rem 3rem;
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

.review {
    padding: 0 50px;
}

.review h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-theme-950);
}

.review .review-item {
    margin: 10px 0;
    border-bottom: 1px solid #E6E6E6;
    padding: 20px 0;
}

.review-item .user {
    display: flex;
    align-items: flex-start;
}

.review-item .user img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    margin-right: 10px;
}

.review-item .review-content {
    margin-left: 45px;
}

.user-data h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-theme-950);
}

.review-content p {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin: 0;
}

.review .no-comment p {
    font-size: 1rem;
    color: var(--color-theme-500);
    margin: 0;
    padding: 2rem 0;
}
</style>