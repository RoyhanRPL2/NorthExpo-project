<template>
  <div class="about">
    <h1>Welcome {{ user.user.name }}</h1>
    <button v-on:click="logout" class="button-logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      user: {},
      nama: '',
      alamat: '',
      foto: '',
      deskripsi: '', 
    }
  },
  async created() {
    const userInfo = localStorage.getItem('user-info')
    if (userInfo) {
      this.user = JSON.parse(userInfo)
    } 
    else {
      alert('Harap login terlebih dahulu')
      this.$router.push('/login')
    }
    console.log(this.user.user)
  },
  methods : {
    logout() {
      console.warn('logout berhasil');
      localStorage.clear();
      this.$router.push('/login');
    },
  }
 
}
</script>



<style>
h1 {
  font-size: 3rem;
  text-align: center;
  margin-top: 2rem;
  color: var(--color-theme-950);
}

</style>
