<template>
    <div class="detail-profile">
        <div class="profile-banner">
            <!-- <img src="src\assets\images\profile-banner-bg.png" alt="User banner" class="banner"> -->
            <img :src="'https://source.unsplash.com/1600x900/?nature/' + Math.random()" alt="User banner" class="banner">
        </div>
        <div class="profile">
            <div class="user">
                <img :src="'https://admin.api.northexpokudus.com/assets/img/avatar/' + userData.avatar" alt=""
                    class="user-avatar">
                <div>
                    <div class="username">
                        <h1>{{ userData.name }}</h1>
                    </div>
                    <div class="email">
                        <h6>{{ userData.email }}</h6>
                    </div>
                </div>
            </div>
            <div class="edit-profile">
                <router-link to="/profile/edit">
                    <button class="btn btn-primary">Ubah Profil</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const userData = ref([]);
const getUserToken = () => {
    const token = localStorage.getItem('token');
    return token ? token.replace(/['"]+/g, '') : '';
};

const getUserData = async () => {
    const userToken = getUserToken();
    try {
        const response = await axios.get('https://admin.api.northexpokudus.com/api/auth/user', {
            headers: {
                Authorization: `Bearer ${userToken}`
            },
        });
        userData.value = response.data.data;
    } catch (error) {
        console.log("error "+error);
    }
};

onMounted(() => {
    getUserData();
});
</script>

    
<style>
.detail-profile {
    width: 100%;
    height: 100%;
}

.detail-profile .profile-banner {
    width: 100%;
    height: 100px;
    background-color: var(--color-secondary-50);
    border-radius: 20px;
}

.detail-profile .profile-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 20px 20px 0 0;
    opacity: 0.8;
}

.detail-profile .profile {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
}

.detail-profile .profile .user {
    display: flex;
    align-items: center;
}

.profile .user img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    margin-right: 30px;
}

.user .username h1 {
    font-size: 28px;
    font-weight: 500;
    color: var(--color-theme-950);
    text-transform: capitalize;
}

.user .email h6 {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-theme-950);
    margin-bottom: 10px;
}

.profile .edit-profile button {
    background-color: var(--color-primary-500);
    padding: 8px 20px;
    border: none;
    border-radius: 10px;
    color: var(--color-theme-50);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
</style>