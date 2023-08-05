<template>
  <div class="logout-popup" v-if="visible">
    <div class="popup-content">
      <font-awesome-icon class="logout-icon" icon="fa-solid fa-arrow-right-from-bracket" />
      <p>Apakah anda yakin ingin keluar?</p>
      <div class="popup-buttons">
        <button @click="cancelLogout">Cancel</button>
        <button @click="confirmLogout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { visible } = defineProps(['visible']);
const emit = defineEmits();
const showLogoutPopup = ref(visible);

function cancelLogout() {
  emit('cancel');
  showLogoutPopup.value = false;
}

function confirmLogout() {
  emit('confirm');
  showLogoutPopup.value = false;
}
</script>

<style scoped>
.logout-popup {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-theme-950);
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
}

.logout-icon {
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.popup-content h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.popup-content p {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.popup-buttons {
  display: flex;
  justify-content: center;
}

.popup-buttons button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: var(--color-primary-500);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin: 0 0.5rem;
}

.popup-buttons button:first-child {
  background-color: var(--color-theme-950);
}

.popup-buttons button:hover {
  opacity: 0.8;
}

@media screen and (max-width: 768px) {
  .popup-content {
    width: 300px;
  }
}
</style>