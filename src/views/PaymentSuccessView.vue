<template>
    <div class="success-card">
        <!-- success icon -->
        <div class="icon-wrapper">
            <img class="success-icon" src="../assets/check-symbol-4794.svg" alt="">
        </div>
        <div class="success-card-content">
            <!-- in indonesian language -->
            <h1>Pembayaran Berhasil</h1>
            <p>Terima kasih telah melakukan pembayaran. Silahkan cek email anda untuk mendapatkan tiket.</p>
            <router-link :to="{ name: 'home'}">
                <button>Halaman Utama</button>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.success-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.icon-wrapper {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: var(--color-theme-100);
    display: flex;
    align-items: center;
    justify-content: center;
}

.success-icon {
    width: 100px;
    height: 100px;
}

.success-card-content {
    width: 50%;
    text-align: center;
}

.success-card-content h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-theme-950);
}

.success-card-content p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: var(--color-theme-950);
}

.success-card-content button {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 5px;
    background-color: var(--color-primary-500);
    color: var(--color-theme-50);
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
}

.success-card-content button:hover {
    background-color: var(--color-primary-600);
}

.success-card-content button:focus {
    outline: none;
}

.success-card-content button:active {
    background-color: var(--color-primary-700);
}

@media screen and (max-width: 768px) {
    .success-card-content {
        width: 80%;
    }
}

@media screen and (max-width: 480px) {
    .success-card-content {
        width: 90%;
    }
}
</style>