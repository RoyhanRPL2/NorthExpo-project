<template>
    <div v-if="showSelectContainer" class="select-container">
        <h1>Pesan Tiket</h1>
        <div class="order-detail">
            <p>{{ apiData.nama }}</p>
            <div class="lokasi">
                <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                <p>{{ apiData.alamat }}</p>
            </div>
            <div class="seperate-line"></div>
            <div class="capacity">
                <div class="online-cap">
                    <h4>Kuota Online</h4>
                    <p>100 Orang</p>
                </div>
                <div class="rest-capacity">
                    <h4>Sisa Kuota</h4>
                    <p>100 Orang</p>
                </div>
            </div>
            <div class="seperate-line"></div>
            <router-link :to="{ name: 'ticket', params: { id: this.$route.params.id } }">
                <div class="order-button">
                    <button>Pesan</button>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import id from 'dayjs/locale/id';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
    data() {
        return {
            isLoggedIn: false,
        }
    },
    methods: {
        someMethod() {
            this.isLoggedIn = checkUserLoginStatus();
        }
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

        const showSelectContainer = computed(() => {
            return apiData.value.status;
        });

        // Metode untuk mendapatkan tanggal terpilih
        const selectedDate = ref('');

        const selectedDateFormatted = computed(() => {
            return selectedDate.value ? dayjs(selectedDate.value).format('D MMMM YYYY') : '';
        });

        dayjs.locale('id');
        const dates = [];
        for (let i = 0; i < 7; i++) {
            dates.push(dayjs().add(i, 'day'));
        }

        onMounted(() => {
            fetchData(route.params.id);
        });

        return {
            apiData,
            dates,
            selectedDate,
            selectedDateFormatted,
            showSelectContainer,
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
    margin: 0.5rem 0;
}

.select-container .order-detail .lokasi .icon {
    color: var(--color-primary-500);
    font-size: 1.5rem;
    margin-right: 0.5rem;
}

.select-container .order-detail .lokasi p {
    font-size: 1rem;
    color: var(--color-theme-950);
    font-weight: normal;
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

.select-container .order-detail a {
    text-decoration: none;
}

.select-container .order-detail a .order-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.select-container .order-detail a .order-button button {
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
</style>
