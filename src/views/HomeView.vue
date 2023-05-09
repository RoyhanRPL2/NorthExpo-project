<script setup>
import footerComponent from '../components/footer.vue'
</script>

<template>
  <main>
    <h1>Home Page</h1>
  </main>
  <footerComponent/>
</template>

<style>
main {
  height: 100vh;
  width: 100%;
  background-color: var(--color-primary-600);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
