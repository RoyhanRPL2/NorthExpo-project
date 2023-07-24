<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
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
        <div class="card-info">
            <div class="card-title">
                <h1>The Hills Vaganza</h1>
            </div>
            <div class="card-day">
                <h1>Hari Senin</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Selasa</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Rabu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Kamis</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Jumat</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Sabtu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="circle-bg"></div>
        </div>

        <div class="card-info">
            <div class="card-title">
                <h1>Gardu Padang</h1>
            </div>
            <div class="card-day">
                <h1>Hari Senin</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Selasa</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Rabu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Kamis</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Jumat</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Sabtu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="circle-bg"></div>
        </div>

        <div class="card-info">
            <div class="card-title">
                <h1>Air Terjun Kedung Gender</h1>
            </div>
            <div class="card-day">
                <h1>Hari Senin</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Selasa</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Rabu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Kamis</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Jumat</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Sabtu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="circle-bg"></div>
        </div>

        <div class="card-info">
            <div class="card-title">
                <h1>Gardu Padang</h1>
            </div>
            <div class="card-day">
                <h1>Hari Senin</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Selasa</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Rabu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Kamis</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Jumat</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Sabtu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="circle-bg"></div>
        </div>

        <div class="card-info">
            <div class="card-title">
                <h1>Gardu Padang</h1>
            </div>
            <div class="card-day">
                <h1>Hari Senin</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Selasa</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Rabu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Kamis</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Jumat</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="card-day">
                <h1>Hari Sabtu</h1>
                <p>Harga : Rp 10.000</p>
            </div>

            <div class="circle-bg"></div>
        </div>
    </div>
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
    align-items: center;
    align-content: center;
    gap: 100px 150px;
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
    gap: 40px;
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
    min-width: 200px;
}

.card-info .card-day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
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
</style>