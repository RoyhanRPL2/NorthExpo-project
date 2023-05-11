<script setup>
import footerComponent from '../components/footer.vue'
</script>

<template>
  <header>
    <router-link :to="{name: 'destinasi'}">
      <p>destinasi</p>
    </router-link>
  </header>
  
  <main>
    <h1>Home Page</h1>
  </main>
  <footerComponent/>
</template>

<style>
header {
  padding: 20px;
}


main {
  height: 100vh;
  width: 100%;
  background-color: var(--color-primary-600);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
