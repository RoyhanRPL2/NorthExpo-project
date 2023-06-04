<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import CardProfile from '../components/CardProfile.vue'
import ProfileTicketstatus from '../components/ProfileTicketStatus.vue'
</script>
<template>
    <HeaderComponent />
    <div class="container">
        <div class="profile-title">
            <h1>Profil</h1>
            <h4>NorthExpo</h4>
        </div>
        <div class="profile">
            <CardProfile />
            <ProfileTicketstatus />
        </div>
    </div>
</template>
<style scoped>
.container .profile-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 70px 0;
}

.container .profile-title h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-theme-950);
    max-width: 600px;
    text-align: center;
    margin-bottom: 10px;
}

.container .profile-title h4 {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-primary-500);
}

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container .profile {
    display: flex;
}
</style>