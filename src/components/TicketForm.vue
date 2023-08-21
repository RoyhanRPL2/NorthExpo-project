<template>
    <div class="ticket-form-container">
        <h2>Form Pemesanan Tiket</h2>
        <form @submit.prevent="pay()">
            <div class="form-group">
                <label for="tanggal">Tanggal</label>
                <input type="date" v-model="tanggal" id="tanggal" :min="minDate">
            </div>
            <div class="form-group">
                <label for="no_telp">No.Hp</label>
                <input type="text" v-model="no_telp" id="no_telp">
            </div>
            <div class="form-group">
                <label for="qty">Jumlah Orang</label>
                <input type="number" v-model="qty" min="1" id="qty">
                <p>*jumlah orang dalam rombongan</p>
            </div>
            <div class="term-condition">
                <div class="first-term">
                    <p>1. Syarat dan ketentuan berkunjung</p>
                    <ul>
                        <li>Menjaga kebersihan tempat wisata</li>
                        <li>Mengikuti himbauan dan petunjuk petugas wisata</li>
                        <li>Tiket yang sudah dibayar tidak dapat dikembalikan (non-refundable)</li>
                    </ul>
                </div>
                <div class="second-term">
                    <p>2. Saya dan/atau rombongan telah memahami, setuju dan bertanggung jawab dengan segala resiko apabila
                        tidak mematuhi syarat & ketentuan yang telah ditetapkan di atas.</p>
                </div>
            </div>
            <div class="confirm-text">
                <input type="checkbox" v-model="isAgreed">
                <p>Saya telah membaca dan menyetujui syarat dan ketentuan berkunjung</p>
            </div>
            <div class="button-container">
                <button type="submit" class="btn btn-primary pay-button">Pesan</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import moment from 'moment-timezone';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            id: null,
            qty: 1,
            no_telp: '',
            tanggal: '',
            isAgreed: false,
            harga: null,
            minDate: this.getTodayISOString()
        }
    },
    created() {
        this.id = this.$route.params.id
        this.fetchdata()
    },
    methods: {
        parseOperatingHours(operatingHours) {
            const [openingTimeStr, closingTimeStr] = operatingHours.split(' - ');
            const openingTime = parseInt(openingTimeStr.split('.')[0], 10);
            const closingTime = parseInt(closingTimeStr.split('.')[0], 10);
            return { openingTime, closingTime };
        },
        getTodayISOString() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        async fetchdata() {
            try {
                const response = await axios.get(`https://admin.api.northexpokudus.com/api/destinasi/${this.id}`);
                this.harga = response.data.data.harga; // Set the 'harga' value from the fetched destination data
                console.log(this.harga)

                const operatingHours = response.data.data.operasional;
                const { openingTime, closingTime } = this.parseOperatingHours(operatingHours);

                this.operatingHours = { openingTime, closingTime };
            } catch (error) {
                console.error(error);
            }
        },
        async pay() {
            if (!this.tanggal || !this.no_telp || !this.qty) {
                Swal.fire({ // Use Swal.fire for error messages
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Harap isi semua kolom input sebelum melanjutkan.',
                });
                return;
            }

            if (!this.isAgreed) {
                Swal.fire({ // Use Swal.fire for error messages
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Harap setujui syarat dan ketentuan sebelum melanjutkan.',
                });
                return;
            }

            if (this.tanggal === this.getTodayISOString()) {
                const now = new Date();
                const currentHour = now.getHours();

                if (currentHour < this.operatingHours.openingTime || currentHour >= this.operatingHours.closingTime) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Jam Operasional Wisata',
                        text: 'Maaf, pemesanan tiket hanya tersedia selama jam operasional wisata.',
                    });
                    return;
                }
            }

            try {
                const getUserInfo = localStorage.getItem('user-info');
                const userInfo = JSON.parse(getUserInfo);

                const token = userInfo.token;
                const userId = userInfo.user.id;
                const email = userInfo.user.email;
                const currentTimeInSeconds = String(Math.floor(Date.now() / 1000));
                const timestamp = moment().tz("Asia/Jakarta").format("YYYYMMDDHHmm")

                let result = await axios.post(`https://admin.api.northexpokudus.com/api/order/transaction/${this.id}`, {
                    order_id: 'NE' + timestamp,
                    destinasi_id: this.id,
                    user_id: userId,
                    qty: this.qty,
                    email: email,
                    no_telp: this.no_telp,
                    tanggal: this.tanggal,
                    total: this.qty * this.harga,

                }, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                if (result.status == 200) {
                    Swal.fire({ // Use Swal.fire for error messages
                        icon: 'success',
                        title: 'Tiket Berhasil Dipesan',
                        text: 'Silahkan lanjutkan pembayaran',
                    });
                    localStorage.setItem('pembayaran', JSON.stringify(result.data));
                    localStorage.setItem('tkn-pembayaran', result.data.token);
                    this.$router.push(`/payment/${this.id}`);
                    console.warn(result);
                }
                else {
                    Swal.fire({ // Use Swal.fire for error messages
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Terjadi Kesalahan!',
                    });
                }
                console.log(result.status);
                console.log(result.data);
            } catch {
                Swal.fire({ // Use Swal.fire for error messages
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Terjadi Kesalahan!',
                });
            }
            console.log(this.harga)
        }
    }
}
</script>

<style scoped>
.ticket-form-container {
    width: 30%;
    border: 1px solid var(--color-theme-100);
    box-shadow: 0px 0px 10px var(--color-theme-100);
    padding: 2rem;
    border-radius: 10px;
}

.ticket-form-container h2 {
    text-align: center;
    color: var(--color-theme-950);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.ticket-form-container form {
    display: flex;
    flex-direction: column;
}

.ticket-form-container .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.ticket-form-container .form-group label {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.3rem;
}

.ticket-form-container .form-group input {
    padding: 0.5rem;
    border: 1px solid #667085;
    border-radius: 5px;
}

.ticket-form-container .form-group p {
    font-size: 0.8rem;
    color: var(--color-theme-950);
    margin-top: 0.5rem;
}

.ticket-form-container .payment {
    margin-top: 1.5rem;
}

.ticket-form-container .payment h2 {
    text-align: center;
    color: var(--color-theme-950);
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.ticket-form-container .payment-method-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
}

.ticket-form-container .payment-method-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 1rem;
    transition: background-color 0.2s ease;
    cursor: pointer;
}

.payment-method-item.active {
    background-color: var(--color-primary-500);
    border: none;
}

.ticket-form-container .payment-method-item .bill-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: var(--color-theme-950);
}

.ticket-form-container .payment-method-item.active .bill-icon {
    fill: #fff;
}

.ticket-form-container .payment-method-item .qris-icon {
    width: 50%;
    margin-bottom: 0.5rem;
}

.qris-icon {
    transition: filter 0.2s ease;
}

.ticket-form-container .payment-method-item.active .qris-icon {
    filter: invert(100%);
}


.ticket-form-container .payment-method-item h3 {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
    font-weight: 700;
    text-align: center;
}

.ticket-form-container .payment-method-item.active h3 {
    color: #fff;
}

.ticket-form-container .payment-method-item p {
    font-size: 0.8rem;
    color: var(--color-theme-950);
    text-align: center;
}

.ticket-form-container .payment-method-item.active p {
    color: #fff;
}

.ticket-form-container .term-condition {
    margin-bottom: 1rem;
}

.ticket-form-container .term-condition .first-term {
    margin-bottom: 0.7rem;
    padding: 0.5rem;
}

.ticket-form-container .term-condition .first-term p {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
}

.ticket-form-container .term-condition .first-term ul {
    margin-left: 0.3rem;
}

.ticket-form-container .term-condition .first-term ul li {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
}

.ticket-form-container .term-condition .second-term {
    margin-bottom: 0.5rem;
}

.ticket-form-container .term-condition .second-term p {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
    padding: 0.5rem;
}

.ticket-form-container .confirm-text {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
}

.ticket-form-container .confirm-text input {
    margin-right: 0.6rem;
}

.ticket-form-container .confirm-text p {
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
}

.ticket-form-container .button-container {
    display: flex;
    justify-content: center;
}

.ticket-form-container .button-container button {
    width: 50%;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    background-color: var(--color-primary-500);
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
}
</style>