<template>
    <div class="select-container">
        <h1>Pesan Tiket</h1>
        <div class="order-detail">
            <p>{{ apiData.nama }}</p>
            <div class="lokasi">
                <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                <div class="location-wrapper">
                    <p>{{ apiData.alamat }}</p>
                </div>
            </div>
            <div class="seperate-line"></div>
            <div class="capacity">
                <div class="online-cap">
                    <h4>Kuota Tiket Online</h4>
                    <p> {{ restTicketCapacity.sisa_kuota }} Tiket</p>
                </div>
            </div>
            <div class="seperate-line"></div>
            <div class="order-button">
                <button @click="pesanTiket">Pesan</button>
            </div>
            <div v-if="isLoginModalOpen" class="modal">
                <div class="modal-content">
                    <div class="icon-wrapper">
                        <font-awesome-icon class="warn-icon" icon="fa-solid fa-circle-exclamation" />
                    </div>
                    <p>Maaf, anda harus login terlebih dahulu untuk memesan tiket.</p>
                    <div class="btn-wrapper">
                        <button @click="redirectToLogin" class="login-button">Login</button>
                        <button @click="closeModal" class="close-button">Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import id from 'dayjs/locale/id';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            isLoggedIn: false,
            isLoginModalOpen: false,
            userTicketStatus: false,
            userTicket: {},
            restTicketCapacity: {},
        }
    },
    methods: {
        someMethod() {
            this.isLoggedIn = checkUserLoginStatus();
        },
        pesanTiket() {
            const token = localStorage.getItem('token');
            const userInfo = JSON.parse(localStorage.getItem('user-info'));
            if (token) {
                if (userInfo && userInfo.user) {
                    const userId = userInfo.user.id;
                    if (this.userTicketStatus) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Oops...',
                            text: 'Selesaikan pembayaran tiket terlebih dahulu!',
                            confirmButtonText: 'Lanjutkan Pembayaran',
                        }).then((userTicketStatus) => {
                            if (userTicketStatus) {
                                this.$router.push({ name: 'payment', params: { id: userId } });
                            }
                        });
                    } else {
                        this.$router.push({ name: 'ticket', params: { id: this.$route.params.id } });
                    }
                }

            } else {
                // Pengguna belum login, tampilkan modal login
                this.isLoginModalOpen = true;
            }
        },
        redirectToLogin() {
            // Metode untuk mengarahkan ke halaman login
            this.$router.push('/login');
        },
        closeModal() {
            // Metode untuk menutup modal
            this.isLoginModalOpen = false;
        },
        fetchUserTicket() {
            const userInfo = JSON.parse(localStorage.getItem('user-info'));

            if (userInfo && userInfo.user) {
                const id = userInfo.user.id;

                axios.get(`https://admin.api.northexpokudus.com/api/order/user/${id}`)
                    .then(res => {
                        this.userTicket = res.data.data;
                        console.log(this.userTicket);

                        // Loop melalui tiket user untuk memeriksa status "pending"
                        for (const ticket of this.userTicket) {
                            if (ticket.status === "pending") {
                                this.userTicketStatus = true; // Set userTicketStatus menjadi true
                                break; // Keluar dari loop jika tiket dengan status "pending" ditemukan
                            }
                        }
                    })
                    .catch(err => console.log(err))
            } else {
                console.log("User info is not available");
            }
        },
        fetchRestTiketCapacity() {
            const id = this.$route.params.id;

            const date = new Date();

            let currentDay = String(date.getDate()).padStart(2, '0');

            let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

            let currentYear = date.getFullYear();

            let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

            console.log("The current date is " + currentDate);

            axios.get(`https://admin.api.northexpokudus.com/api/sisakuota/${id}/tanggal/${currentDate}`)
                .then(res => {
                    this.restTicketCapacity = res.data.data;
                    console.log(this.restTicketCapacity);
                })
                .catch(err => console.log(err))
        },
    },
    mounted() {
        this.fetchUserTicket();
        this.fetchRestTiketCapacity();
    },
    setup() {
        const route = useRoute();
        const store = useStore();

        const apiData = computed(() => {
            return store.getters.getApiData;
        });


        const fetchData = async (id) => {
            await store.dispatch('fetchData', id);
        };

        // Metode untuk mendapatkan tanggal terpilih
        const selectedDate = ref('');

        const selectedDateFormatted = computed(() => {
            return selectedDate.value ? dayjs(selectedDate.value).format('D MMMM YYYY') : '';
        });

        // const fetchTicketData = async (id) => {
        //     try {
        //         const response = await axios.get(`https://admin.api.northexpokudus.com/api/sisakuota/${id}`);
        //         ticketApi.value = response.data.data;
        //         console.log(ticketApi.value);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        // dayjs.locale('id');
        // const dates = [];
        // for (let i = 0; i < 7; i++) {
        //     dates.push(dayjs().add(i, 'day'));
        // }

        onMounted(() => {
            fetchData(route.params.id);
        });

        return {
            apiData,
            selectedDate,
            selectedDateFormatted,
        };
    },
};
</script>

<style scoped>
.select-container {
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.select-container h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-theme-950);
}

.select-container p {
    font-size: 1rem;
    color: var(--color-theme-950);
}

.select-container select {
    width: 100%;
    height: 3rem;
    margin-top: 0.5rem;
    padding: 0 1rem;
    border: 1px solid var(--color-theme-950);
    border-radius: 0.5rem;
    font-size: 1rem;
    color: var(--color-theme-950);
    outline: none;
}

.select-container select:focus {
    border: 1px solid var(--color-primary-500);
}

.select-container .order-detail {
    border: 1px solid var(--color-theme-950);
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 1rem;
}

.select-container .order-detail p {
    font-size: 1rem;
    color: var(--color-theme-950);
    font-weight: 600;
}

.select-container .order-detail .lokasi {
    display: flex;
    align-items: center;
}

.select-container .order-detail .lokasi .location-wrapper {
    overflow: hidden;
}

.select-container .order-detail .lokasi .location-wrapper p {
    font-size: 1rem;
    color: var(--color-theme-950);
    font-weight: normal;
    margin: 0.5rem 0;
    max-width: 20%;
    white-space: nowrap;
    transform: translateX(0);
    animation: marqueeLocation 30s linear infinite;
}



.select-container .order-detail .lokasi .icon {
    color: var(--color-primary-500);
    font-size: 1.5rem;
    margin-right: 0.5rem;
}

.select-container .order-detail .seperate-line {
    width: 100%;
    height: 1px;
    background-color: var(--color-theme-950);
    margin: 1rem 0;
}

.select-container .time-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.select-container .order-detail .time-detail .date {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary-500);
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
}

.select-container .order-detail .time-detail .date .calendar-icon {
    color: #fff;
    font-size: 1rem;
    margin-right: 0.5rem;
}

.select-container .order-detail .time-detail .date p {
    color: #fff;
    font-size: 1rem;
}

.select-container .order-detail .time-detail .service-time {
    padding: 0.3rem 0.5rem;
    border: 1px solid var(--color-theme-950);
    border-radius: 0.5rem;
}

.select-container .order-detail .time-detail .service-time p {
    color: var(--color-theme-950);
    font-size: 1rem;
}

.select-container .order-detail .capacity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.7rem 0;
}

.select-container .order-detail .capacity .online-cap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: left;
}

.select-container .order-detail .capacity .online-cap h4 {
    color: var(--color-theme-950);
    font-size: 1rem;
    font-weight: 600;
}

.select-container .order-detail .capacity .online-cap p {
    color: var(--color-theme-950);
    font-size: 1rem;
    font-weight: normal;
}

.select-container .order-detail .capacity .rest-capacity {
    text-align: right;
}

.select-container .order-detail .capacity .rest-capacity h4 {
    color: var(--color-theme-950);
    font-size: 1rem;
    font-weight: 600;
}

.select-container .order-detail .capacity .rest-capacity p {
    color: var(--color-theme-950);
    font-size: 1rem;
    font-weight: normal;
}


.select-container .order-detail .order-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.select-container .order-detail .order-button button {
    width: 100%;
    height: 3rem;
    background-color: var(--color-primary-500);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    text-decoration: none;
}

.select-container .order-detail .order-button button:hover {
    cursor: pointer;
    background-color: var(--color-primary-600);
}

.select-container .order-detail .order-button button:active {
    background-color: var(--color-primary-700);
}

.select-container .order-detail .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.select-container .order-detail .modal .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 25%;
}

.select-container .order-detail .modal .modal-content .icon-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.select-container .order-detail .modal .modal-content .warn-icon {
    color: var(--color-primary-500);
    font-size: 4rem;
    margin-bottom: 1rem;
}

.select-container .order-detail .modal .modal-content p {
    font-size: 1rem;
    color: var(--color-theme-950);
    text-align: center;
    margin-bottom: 1rem;
}

.select-container .order-detail .modal .modal-content .btn-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.select-container .order-detail .modal .modal-content .login-button {
    width: 100%;
    height: 3rem;
    background-color: var(--color-primary-500);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    text-decoration: none;
    margin-bottom: 0.5rem;
}

.select-container .order-detail .modal .modal-content .login-button:hover {
    cursor: pointer;
    background-color: var(--color-primary-600);
}

.select-container .order-detail .modal .modal-content .login-button:active {
    background-color: var(--color-primary-700);
}

.select-container .order-detail .modal .modal-content .close-button {
    width: 100%;
    height: 3rem;
    background-color: var(--color-theme-950);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    text-decoration: none;
}

.select-container .order-detail .modal .modal-content .close-button:hover {
    cursor: pointer;
    background-color: var(--color-theme-900);
}

.select-container .order-detail .modal .modal-content .close-button:active {
    background-color: var(--color-theme-800);
}

@media screen and (max-width: 768px) {
    .select-container .order-detail .modal .modal-content {
        width: 50%;
    }

    .select-container .order-detail .modal .modal-content .warn-icon {
        font-size: 3rem;
    }
}

@media screen and (max-width: 576px) {
    .select-container .order-detail .modal .modal-content {
        width: 75%;
    }
}

@media screen and (max-width: 480px) {
    .select-container .order-detail .modal .modal-content {
        width: 90%;
    }
}

@media screen and (max-width: 360px) {
    .select-container .order-detail .modal .modal-content {
        width: 100%;
    }
}
</style>
