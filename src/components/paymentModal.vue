<template>
  <div>
    <button @click="makePayment">Buat Pembayaran</button>
    <div v-if="response">
      <p>Status Pembayaran: {{ response.status }}</p>
      <p>Total Pembayaran: {{ response.total }}</p>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  data() {
    return {
      response: null
    }
  },
  methods: {
    makePayment() {
      axios.post('https://admin.api.northexpokudus.com/api/order/list', {
      })
        .then((res) => {
          this.response = res.data;
          console.log(this.response);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>
  