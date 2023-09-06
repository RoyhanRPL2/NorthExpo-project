<template>
    <div class="container">
        <div class="top-container">
            <div class="img-wrapper">
                <img v-if="destination.foto" :src="'https://admin.api.northexpokudus.com/foto/' + destination.foto" alt="">
            </div>
            <div class="destination-detail">
                <div class="top-detail">
                    <h2>{{ destination ? destination.nama : '' }}</h2>
                    <div class="lokasi">
                        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                        <div class="location-wrapper">
                            <p>{{ destination ? destination.alamat : '' }}</p>
                        </div>
                    </div>
                </div>
                <div class="bottom-detail">
                    <div class="serve-time">
                        <h4>Jam Operasional</h4>
                        <p>{{ destination ? destination.operasional : '' }}</p>
                    </div>
                    <div class="price">
                        <h4>Harga Tiket</h4>
                        <p>Rp{{ formattedHarga(destination.harga) }}/Orang</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="seperate-line"></div>
        <div class="center-container">
            <div class="description-container">
                <h2>Deskripsi</h2>
                <p>{{ destination ? destination.deskripsi : '' }}</p>
            </div>
            <div class="capacity-container">
                <div class="capacity-content">
                    <h3>Sisa kuota: {{ TicketRestCapacity.sisa_kuota }} tiket</h3>
                </div>
            </div>
        </div>
        <div class="bottom-container">
            <div class="information-text">
                <font-awesome-icon class="warn-icon" icon="fa-solid fa-circle-exclamation" />
                <p>Harga tiket dapat berubah sewaktu-waktu</p>
            </div>
            <div class="information-text">
                <font-awesome-icon class="warn-icon" icon="fa-solid fa-circle-exclamation" />
                <p>Obyek wisata dapat tutup sewaktu-waktu</p>
            </div>
            <div class="information-text">
                <font-awesome-icon class="warn-icon" icon="fa-solid fa-circle-exclamation" />
                <p>Jam operasional dapat berubah sewaktu-waktu</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import { eventBus } from '../eventBus.js';

export default {
    data() {
        return {
            id: null,
            tanggal: '',
            TicketRestCapacity: {},
            destination: {},
        };
    },
    created() {
        this.id = this.$route.params.id;
        eventBus.on('date', (date) => {
            this.tanggal = date;
        });

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        this.tanggal = `${year}-${month}-${day}`;
    },
    methods: {
        formattedHarga(harga) {
            if (harga !== null && harga !== undefined) {
                return harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            }
            return ''; // Atau nilai default lain jika harga tidak ada
        },
        async fetchTicketRestCapacity() {
            try {
                const response = await axios.get(`https://admin.api.northexpokudus.com/api/sisakuota/${this.id}/tanggal/${this.tanggal}`);
                this.TicketRestCapacity = response.data.data;
                console.log(this.TicketRestCapacity);
            } catch (error) {
                console.error(error);
            }
        },
        async fetchDestinationData() {
            try {
                const response = await axios.get(`https://admin.api.northexpokudus.com/api/destinasi/${this.id}`);
                this.destination = response.data.data;
                console.log(this.destination.harga)
            } catch (error) {
                console.error(error);
            }
        },
    },
    watch: {
        tanggal(newTanggal, oldTanggal) {
            this.fetchTicketRestCapacity();
        },
    },
    mounted() {
        this.fetchTicketRestCapacity();
        this.fetchDestinationData();
    },
};
</script>

<style scoped>
.container {
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid var(--color-theme-100);
    box-shadow: 0px 0px 10px var(--color-theme-100);
    border-radius: 10px;
}

.top-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.img-wrapper {
    width: 20%;
    height: fit-content;
    display: flex;
}

.img-wrapper img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.destination-detail {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
}

.top-detail {
    width: 100%;
}

.top-detail h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary-950);
}

.lokasi {
    display: flex;
    align-items: center;
}

.lokasi p {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary-950);
}

.lokasi .icon {
    color: var(--color-primary-950);
}

.bottom-detail {
    width: 100%;
    display: flex;
    margin-top: 1.8rem;
    gap: 4rem;
}

.bottom-detail h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary-950);
}

.bottom-detail p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary-950);
}

.seperate-line {
    width: 100%;
    height: 1px;
    background-color: var(--color-primary-950);
    opacity: 0.2;
}

.center-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.description-container {
    width: 75%;
    padding: 1rem 2rem;
}

.description-container h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary-950);
}

.description-container p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary-950);
    text-align: justify;
    padding: 1rem 0;
}

.capacity-container {
    width: 25%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.capacity-container .capacity-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary-700);
    border-radius: 8px;
    padding: 1rem;
}

.capacity-content h3 {
    width: 50%;
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-primary-50);
    text-align: center;
}

.bottom-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
}

.information-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary-950);
    margin: 0.3rem;
    padding: 0.7rem;
}

.information-text p {
    margin-left: 0.6rem;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-primary-950);
}

.information-text .warn-icon {
    color: var(--color-primary-600);
}

@media screen and (max-width: 992px) {

    .capacity-container {
        height: 70px;
    }
    .capacity-container .capacity-content h4, .capacity-container .capacity-content p {
        font-size: 12px;
    }
}

@media screen and (max-width: 768px) {
    .container {
        width: 100%;
    }

    .top-container {
        flex-direction: column;
        align-items: center;
    }

    .img-wrapper {
        width: 100%;
    }

    .destination-detail {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
    }

    .top-detail {
        width: 100%;
    }

    .top-detail h2 {
        text-align: center;
        font-size: 2rem;
    }

    .top-detail .lokasi {
        width: 100%;
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
    }

    .top-detail .lokasi .icon {
        display: none;
        margin-right: 0.5rem;
    }

    .top-detail .lokasi .location-wrapper {
        width: 100%;
        overflow: hidden;
        justify-content: center;
    }

    .top-detail .lokasi .location-wrapper p {
        font-size: 0.9rem;
        /* white-space: nowrap;
        transform: translateX(0);
        animation: marqueeLocation 30s linear infinite; */
        text-align: center;
    }

    @keyframes marqueeLocation {
        0% {
            transform: translateX(0);
        }

        10% {
            transform: translateX(0);
        }

        60% {
            transform: translateX(calc(-100% - 200px));
        }

        70% {
            transform: translateX(calc(-100% - 200px));
        }

        100% {
            transform: translateX(0);
        }
    }

    .bottom-detail {
        width: 100%;
        gap: 2rem;
        justify-content: center;
    }

    .bottom-detail .serve-time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .bottom-detail .price {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .bottom-detail h4 {
        font-size: 0.9rem;
    }

    .bottom-detail p {
        font-size: 0.9rem;
    }

    .center-container {
        flex-direction: column;
        align-items: center;
    }

    .description-container {
        width: 100%;
        padding: 1rem 0;
    }

    .description-container h2 {
        font-size: 1.2rem;
    }

    .description-container p {
        font-size: 0.9rem;
    }

    .capacity-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .capacity-container .capacity-content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary-700);
        border-radius: 8px;
        padding: 1rem;
    }

    .bottom-container {
        flex-direction: column;
        align-items: center;
    }

    .information-text {
        width: 100%;
        margin: 0.3rem 0;
    }

    .information-text p {
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 576px) {
    .container {
        width: 100%;
    }

    .top-container {
        flex-direction: column;
        align-items: center;
    }

    .img-wrapper {
        width: 100%;
    }

    .destination-detail {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
    }

    .top-detail {
        width: 100%;
    }

    .top-detail h2 {
        text-align: center;
        font-size: 1.5rem;
    }

    .top-detail .lokasi {
        width: 100%;
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
    }

    .top-detail .lokasi .icon {
        display: none;
        margin-right: 0.5rem;
    }

    .top-detail .lokasi .location-wrapper p {
        font-size: 0.9rem;
        /* white-space: nowrap;
        transform: translateX(0);
        animation: marqueeLocation 30s linear infinite; */
        text-align: center;
    }

    .bottom-detail {
        width: 100%;
        gap: 2rem;
        flex-direction: column;
    }

    .bottom-detail .serve-time,.price {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary-600);
        border-radius: 8px;
    }

    .bottom-detail .serve-time h4,.price h4, .bottom-detail .serve-time p,.price p {
        color: #fff;
    }


}
</style>