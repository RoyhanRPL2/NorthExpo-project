<template>
    <div class="container">
        <div class="top-container">
            <div class="img-wrapper">
                <img v-if="destination && destination.foto" :src="'https://admin.api.northexpokudus.com/foto/' + destination.foto"
                    alt="">
            </div>
            <div class="destination-detail">
                <div class="top-detail">
                    <h2>{{ destination ? destination.nama : '' }}</h2>
                    <div class="lokasi">
                        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                        <p>{{ destination ? destination.alamat : '' }}</p>
                    </div>
                </div>
                <div class="bottom-detail">
                    <div class="serve-time">
                        <h4>Jam Operasional</h4>
                        <p>{{ destination ? destination.operasional : '' }}</p>
                    </div>
                    <div class="price">
                        <h4>Harga Tiket</h4>
                        <p>Rp.{{ destination ? destination.harga : '' }}/Orang</p>
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
                <h3>Sisa kuota: {{ ticketApi.sisa_kuota }} tiket</h3>
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

export default {
    setup() {
        const route = useRoute();
        const destinationId = computed(() => route.params.id);
        const date = computed(() => route.query.date);
        const destination = ref(null);
        const ticketApi = ref({});

        // Lakukan logika untuk mengambil data destinasi berdasarkan ID
        
        const fetchData = async (id) => {
            try {
                const response = await axios.get(`https://admin.api.northexpokudus.com/api/destinasi/${id}`);
                destination.value = response.data.data; // Simpan data destinasi dalam properti reactive
                console.warn(destination.value);
                // Lakukan manipulasi atau pengaturan data sesuai kebutuhan
            } catch (error) {
                console.error(error);
            }
        };

        const fetchTicketData = async (id) => {
            try {
                const response = await axios.get(`https://admin.api.northexpokudus.com/api/sisakuota/${id}`);
                ticketApi.value = response.data.data;
                console.log(ticketApi.value);
            } catch (error) {
                console.error(error);
            }
        };

        onMounted(() => {
            fetchData(destinationId.value);
            fetchTicketData(route.params.id)
        });

        return {
            destinationId,
            date,
            fetchData,
            destination,
            ticketApi
        };
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
    width: 30%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary-700);
    border-radius: 10px;
}

.capacity-container h3 {
    width: 40%;
    font-size: 1.1rem;
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
</style>