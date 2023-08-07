<template>
    <div class="ticket-status">
        <div class="status">
            <div class="status-preview" v-for="(ticket, index) in tickets" :key="index">
                <div class="card-ticket">
                    <!-- add random image -->
                    <div class="background-img"
                        :style="{ backgroundImage: 'url(https://admin.api.northexpokudus.com/foto/' + ticket.destinasi.foto + ')' }">
                        <div class="dark-overlay"></div>
                        <div class="linear-overlay"></div>
                        <h3>{{ ticket.destinasi.nama }}</h3>
                    </div>
                    <div class="user-data">
                        <div class="user">
                            <h4>Nama Pemesanan</h4>
                            <p>{{ ticket.user.name }}</p>
                        </div>
                        <div class="quantity">
                            <h4>Jumlah Orang</h4>
                            <div class="qty-item">
                                <font-awesome-icon class="person-icon" icon="fa-solid fa-person" size="xl" />
                                <p>{{ ticket.qty }}</p>
                            </div>
                        </div>
                        <div class="date-container">
                            <div class="date">
                                <h4>Tanggal</h4>
                                <p>{{ formatDate(ticket.tanggal) }}</p>
                            </div>
                            <font-awesome-icon class="arrow-icon" icon="fa-solid fa-angle-right" />
                            <div class="operational">
                                <h4>Jam Operasional</h4>
                                <p>{{ ticket.destinasi.operasional }}</p>
                            </div>
                        </div>
                        <!-- <div class="status-container">
                            <h4>Status</h4>
                            
                        </div> -->
                    </div>
                </div>
                <div class="qr-container">
                    <p>Scan QR Code</p>
                    <img :src="'https://admin.api.northexpokudus.com/qrcode/' + ticket.order_id + '.png'" alt="">
                    <div class="status-item" :style="{ background: getStatusGradient(ticket.status) }">
                        <p>{{ ticket.status }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ProfileTicketStatus',
    data() {
        return {
            tickets: [],
            active: 0
        }
    },
    methods: {
        getTickets() {
            const userId = JSON.parse(localStorage.getItem('user-info')).user.id;
            axios.get(`https://admin.api.northexpokudus.com/api/order/user/${userId}`)
                .then(res => {
                    this.tickets = res.data.data
                    console.log(this.tickets)
                })
                .catch(err => console.log(err))
        },
        formatDate(date) {
            const months = [
                'Januari', 'Februari', 'Maret', 'April',
                'Mei', 'Juni', 'Juli', 'Agustus', 'September',
                'Oktober', 'November', 'Desember'
            ];

            const dateObject = new Date(date);
            const day = dateObject.getDate();
            const monthIndex = dateObject.getMonth();
            const year = dateObject.getFullYear();

            return `${day} ${months[monthIndex]} ${year}`;
        },
        getStatusGradient(status) {
            const gradientColors = {
                pending: 'linear-gradient(to bottom, #FDB45C, #FFA630)',
                success: 'linear-gradient(to bottom, #37D699, #5CE386)',
                canceled: 'linear-gradient(to bottom, #FF5C5C, #FF8F8F)'
                // Tambahkan status dan warna gradient sesuai kebutuhan Anda
            };

            return gradientColors[status] || 'linear-gradient(to bottom, #E0E0E0, #D3D3D3)';
        }
    },
    mounted() {
        this.getTickets()
    }
}
</script>

<style scoped>
.ticket-status {
    width: fit-content;
    /* background-color: blue; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.ticket-status h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-theme-950);
    max-width: 600px;
    text-align: center;
    margin-bottom: 40px;
}

.ticket-status .status {
    display: flex;
    flex-direction: column;
}

.status .status-container {
    margin-right: 100px;
}

.status .status-container ul li {
    list-style: none;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-theme-950);
    cursor: pointer;
    transition: 700ms;
    opacity: 0.5;
    text-transform: capitalize;
}

.status .status-container ul li.active {
    opacity: 1;
    background: linear-gradient(0deg, var(--color-primary-500), var(--color-primary-500)) no-repeat right bottom / 0 var(--bg-h);
    transition: background-size 350ms;
    line-height: 1.5;
    --bg-h: 10%;
    background-size: 100% var(--bg-h);
    background-position-x: left;
}

.status .status-preview {
    width: fit-content;
    display: flex;
    align-items: center;

}

.status .status-preview .card-ticket {
    width: 600px;
    height: 300px;
    background-color: var(--color-primary-600);
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.status .status-preview .card-ticket .background-img {
    width: 290px;
    background-size: cover;
    background-position: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
}

.status .status-preview .card-ticket .background-img .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
}

.status .status-preview .card-ticket .background-img .linear-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(270deg, var(--color-primary-600) 0%, rgba(0, 0, 0, 0.00) 100%)
}

.status .status-preview .card-ticket .background-img h3 {
    bottom: 0;
    left: 0;
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
}

.status .status-preview .card-ticket .user-data {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
}

.status .status-preview .card-ticket .user-data .user {
    margin-bottom: 2rem;
}

.status .status-preview .card-ticket .user-data .user h4 {
    font-size: 16px;
    color: var(--color-primary-200);
}

.status .status-preview .card-ticket .user-data .user p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-transform: capitalize;
}

.status .status-preview .card-ticket .user-data .quantity {
    margin-bottom: 2rem;
}


.status .status-preview .card-ticket .user-data .quantity h4 {
    font-size: 16px;
    color: var(--color-primary-200);
}

.status .status-preview .card-ticket .user-data .quantity .qty-item {
    display: flex;
    align-items: center;
}

.status .status-preview .card-ticket .user-data .quantity .qty-item .person-icon {
    color: #fff;
    margin-right: 10px;
}

.status .status-preview .card-ticket .user-data .quantity .qty-item p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-transform: capitalize;
}

.status .status-preview .card-ticket .user-data .date-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.status .status-preview .card-ticket .user-data .date-container .date {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.status .status-preview .card-ticket .user-data .date-container .date h4 {
    font-size: 16px;
    color: var(--color-primary-200);
}

.status .status-preview .card-ticket .user-data .date-container .date p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-transform: capitalize;
}

.status .status-preview .card-ticket .user-data .date-container .arrow-icon {
    color: #fff;
    font-size: 1.2rem;
    margin: 0 1rem;
}

.status .status-preview .card-ticket .user-data .date-container .operational {
    display: flex;
    flex-direction: column;
}

.status .status-preview .card-ticket .user-data .date-container .operational h4 {
    font-size: 16px;
    color: var(--color-primary-200);
}

.status .status-preview .card-ticket .user-data .date-container .operational p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-transform: capitalize;
}

.status .status-preview .qr-container {
    width: 180px;
    height: 300px;
    background-color: #000;
    padding: 0.5rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.status .status-preview .qr-container p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
}

.status .status-preview .qr-container img {
    width: 140px;
    border-radius: 10px;
    margin: 0.5rem 0;
}

.status .status-preview .qr-container .status-item {
    width: fit-content;
    height: fit-content;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-radius: 10px;
}

.status .status-preview .qr-container .status-item p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
}

/* .status .status-preview .ticket-value {
    display: flex;
    padding-right: 20px;
    margin-top: 20px;
}

.status .status-preview .ticket-value span {
    font-size: 16px;
    font-weight: 500;
    color: red;
    margin-right: 5px;
}

.status .status-preview .ticket-value h5 {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-theme-950);
    text-transform: capitalize;
} */
</style>