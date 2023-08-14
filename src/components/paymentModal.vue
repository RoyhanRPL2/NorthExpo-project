<template>
  <!-- detail pembayaran -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <HeaderComponent />
  <div class="container">
    <div class="payment-detail-card">
      <h2>Detail Pesanan</h2>
      <ul class="payment-detail-item">
        <li>
          <h4>Order ID</h4>
          <p>{{ data.payment.order_id }}</p>
        </li>
        <li>
          <h4>Email</h4>
          <p>{{ data.payment.email }}</p>
        </li>
        <li>
          <h4>No.Telepon</h4>
          <p>{{ data.payment.no_telp }}</p>
        </li>
        <li>
          <h4>Harga</h4>
          <p>{{ data.destinasi.harga }}</p>
        </li>
        <li>
          <h4>Jumlah Orang</h4>
          <p>{{ data.payment.qty }}</p>
        </li>
        <li>
          <h4>Total</h4>
          <p>{{ data.payment.total }}</p>
        </li>
      </ul>
      <button @click="payWithMidtrans" class="btn btn-primary">Pay Now</button>
      <button class="back">
        <RouterLink to="/" class="text">Back to Home</RouterLink>
      </button>
    </div>

  </div>
</template>
  
<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
import HeaderComponent from '../components/HeaderComponent.vue'
import Swal from 'sweetalert2';
export default {
  name: 'Pembayaran',
  components: {
    HeaderComponent
  },
  data() {
    return {
      id: null,
      data: {},
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getData();
  },
  mounted() {
    // Load the Midtrans Snap.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute('data-client-key', 'SB-Mid-cli,.ent-3GKYnRbz7jp7ixm_'); // Replace with your actual client key
    document.head.appendChild(script);
  },
  methods: {
    getData() {
      const getPembayaranInfo = localStorage.getItem('pembayaran');
      if (getPembayaranInfo) {
        this.data = JSON.parse(getPembayaranInfo)
        console.log(this.data)
      }
    },
    async payWithMidtrans() {

      try {
        // const response = await axios.post(`http://127.0.0.1:9099/api/order/transaction/${this.id}`); 
        // Retrieve the Snap token from the API response
        const snapToken = this.data.token;

        const self = this;

        // Initiate the Midtrans payment using Snap.js
        snap.pay(snapToken, {
          onSuccess: function (result) {
            // Payment successful, handle success logic here
            // Swal.fire({ // Use Swal.fire for error messages
            //             icon: 'success',
            //             title: 'Pembayaran Berhasil',
            //             text: 'Silahkan Cek Email Anda.',
            //         });
            //clear data local storage
            localStorage.removeItem('pembayaran');
            localStorage.removeItem('tkn-pembayaran');
            // Redirect or show success message as needed
            self.$router.push({ name : 'payment-success'});
          },
          onPending: function (result) {
            // Payment pending, handle pending logic here
            alert('Payment pending. Transaction ID: ' + result.transaction_id);
            // Redirect or show pending message as needed
          },
          onError: function (result) {
            // Payment failed, handle error logic here
            alert('Payment failed. Status code: ' + result.status_code);
            // Redirect or show error message as needed
          }
        });
      } catch (error) {
        // Handle any error that occurs during the payment process
        alert('Error Payment');
      }
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  padding: 6rem 0;
  display: flex;
  align-items: center;
}

.payment-detail-card {
  width: 50%;
  height: fit-content;
  margin: 0 auto;
  border: 1px solid var(--color-theme-100);
  box-shadow: 0px 0px 10px var(--color-theme-100);
  padding: 2rem;
  border-radius: 10px;
}

.payment-detail-card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-theme-950);
  margin-bottom: 1rem;
}

.payment-detail-item {
  list-style: none;
  padding: 0;
  margin: 0;
}

.payment-detail-item li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.payment-detail-item li h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-theme-950);
}

.payment-detail-item li p {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-theme-950);
}

.payment-detail-card button {
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: var(--color-primary-500);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

.payment-detail-card button.back {
  margin-top: 1rem;
  border: 1px solid black;
  background-color: transparent;
}

.payment-detail-card button.back .text {
  color: black;
  text-decoration: none;
}
</style>