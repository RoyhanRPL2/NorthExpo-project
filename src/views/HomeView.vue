<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
// import TitleMain from '../components/TitleMain.vue'
import MainSection from '../components/MainSection.vue';
import AboutSection from '../components/AboutSection.vue';
import footerComponent from '../components/footer.vue';
import KulinerSection from '../components/KulinerSection.vue';
</script>

<template>
  <main>
    <MainSection />
    <!-- <TitleMain /> -->
    <!-- <TheWelcome /> -->
  </main>
  <AboutSection />
  <KulinerSection />
  <footerComponent/>
</template>
