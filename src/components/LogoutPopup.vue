<template>
    <div class="logout-popup" v-if="visible">
        <div class="popup-content">
            <h3>Logout Confirmation</h3>
            <p>Are you sure you want to logout?</p>
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.popup-buttons {
  margin-top: 10px;
  text-align: right;
}
</style>