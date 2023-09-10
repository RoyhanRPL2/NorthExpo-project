<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import FooterComponent from '../components/footer.vue'

let destinasi = ref([])
function formattedHarga(harga) {
    return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

onMounted(async () => {
    axios.get('https://admin.api.northexpokudus.com/api/destinasi')
        .then((response) => {
            destinasi.value = response.data
        })
        .catch((error) => {
            console.log(error)
        })
})

</script>
<template>
    <HeaderComponent />
    <div class="container">
        <div class="title-wrapper">
            <h1>Harga Tiket Wisata</h1>
            <p>Daftar harga tiket dari setiap obyek wisata yang tersedia. Harga dapat berubah sewaktu-waktu.</p>
        </div>
    </div>

    <div class="card-container">
        <div v-for="destination in destinasi.data" :key="destination" class="card-info">
            <div class="card-title">
                <h1>{{ destination.nama }}</h1>
            </div>
            <div v-if="destination.harga > 0" class="card">
                <div class="card-day">
                    <h1>Hari Senin - Minggu</h1>
                    <p>Harga : Rp {{ formattedHarga(destination.harga) }}</p>
                </div>
            </div>

            <div v-else>
                <div class="card-day">
                    <p>Wisata ini gratis dan tidak menggunakan tiket</p>
                </div>
            </div>

            <div class="operasional">
                <h1>Jam Operasional</h1>
                <p>{{ destination.operasional }}</p>
            </div>

            <div class="circle-bg"></div>
        </div>
    </div>
    <FooterComponent />
</template>
<style scoped>
.container {
    width: 100%;
    height: 38vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .title-wrapper {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-theme-900);
    text-align: center;
    max-width: 600px;
}

.container .title-wrapper h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
}

.container .title-wrapper p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary-500);
}

.card-container {
    display: flex;
    width: 100%;
    padding: 0 100px;
    align-items: flex-start;
    align-content: center;
    gap: 100px 100px;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 100px;
}

.card-container .card-info {
    display: inline-flex;
    padding: 20px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 0.5px solid var(--color-theme-200, #C4C6CB);
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(100px);
    overflow: hidden;
}

.card-info .card-title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--color-primary-500, #15ACC5);
    overflow: hidden;
    padding: 20px 30px;
    max-width: min-content;
}

.card-title h1 {
    color: var(--color-theme-50, #F3F7FC);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    min-width: 235px;
}

.card-info .card-day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    margin: 40px 0;
    max-width: 260px;
}

.card-day h1 {
    color: #000;
    text-align: center;

    /* heading 4/bold */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    /* 30px */
    letter-spacing: 0.125px;
}

.card-day p {
    color: #000;
    text-align: center;

    /* heading 4/bold */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    /* 30px */
    letter-spacing: 0.125px;
}

.card-info .operasional {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    padding: 20px 0;
    background-color: transparent;
    border-top: 1px solid var(--color-theme-200, #C4C6CB);
}

.operasional h1 {
    color: var(--color-theme-950);
    text-align: center;

    /* heading 4/bold */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    /* 30px */
    letter-spacing: 0.125px;
}

.operasional p {
    color: var(--color-primary-600);
    text-align: center;

    /* heading 4/bold */
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 30px */
    letter-spacing: 0.125px;
}

.card-info .circle-bg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background: var(--color-primary-500, #15ACC5);
    opacity: 1;
    filter: blur(85px);
    z-index: -1;
}

@media (min-width: 768px) and (max-width: 1024px) {

}

@media screen and (max-width: 768px) {
    .container {
        position: relative;
        padding-top: 120px;
        height: fit-content;
        margin-bottom: 50px;
    }

    .container .title-wrapper {
        position: relative;
        max-width: 100%;
        padding: 0 30px;
        transform: translate(0, 0);
        left: 0;
    }

    .container .title-wrapper h1 {
        font-size: 1.9rem;
    }

    .card-container {
        padding: 0 20px;
        gap: 50px 50px;
        margin-bottom: 50px;
    }
}
</style>