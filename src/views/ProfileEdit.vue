<template>
    <div class="update-profile-container">
        <div class="container">
            <h2>Ubah Profil</h2>
            <form @submit.prevent="saveProfile">
                <div>
                    <label for="avatar">Foto Kamu :</label>
                    <img :src="previewAvatar" alt="" class="user-avatar">
                    <input type="file" id="avatar" @change="handleFileChange" accept="image/*">
                </div>
                <div>
                    <div>
                        <label for="name">Nama :</label>
                        <input type="text" id="name" v-model="userName">
                    </div>
                    <div>
                        <label>Email :</label>
                        <p>{{ userData.email }}</p>
                    </div>
                    <div class="action">
                        <button type="submit">Simpan</button>
                        <router-link to="/profile">
                            <button class="kembali" type="button">Kembali</button>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>

        <div class="circle-bg"></div>
        <div class="circle-bg"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const userName = ref('');
const userAvatar = ref('');
const previewAvatar = ref('');
const userData = ref([]);

const getUserToken = () => {
    const token = localStorage.getItem('token');
    return token ? token.replace(/['"]+/g, '') : '';
};

const handleFileChange = (e) => {
    userAvatar.value = e.target.files[0];
    // show preview avatar before upload
    if (userAvatar.value) {
        const reader = new FileReader();
        reader.onload = () => {
            previewAvatar.value = reader.result;
        };
        reader.readAsDataURL(userAvatar.value);
    } else {
        // show current avatar
        previewAvatar.value = `https://admin.api.northexpokudus.com/assets/img/avatar/${userData.value.avatar}`;
    }
}

const saveProfile = async () => {
    try {
        const token = getUserToken();
        if (token) {
            const formData = new FormData();
            formData.append('name', userName.value);
            if (userAvatar.value) {
                formData.append('avatar', userAvatar.value);
            }

            await axios.post('https://admin.api.northexpokudus.com/api/auth/user/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Profile updated successfully!');
            Swal.fire({
                icon: 'success',
                title: 'Berhasil',
                text: 'Profile berhasil diubah!.',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/profile';
                }
            });
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        Swal.fire({
            icon: 'error',
            title: 'Gagal',
            text: 'Terjadi Kesalahan Saat Mengubah Profil. Coba Kembali!',
        });
    }
};

onMounted(async () => {
    try {
        const token = getUserToken();
        if (token) {
            const response = await axios.get('https://admin.api.northexpokudus.com/api/auth/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            userData.value = response.data.data;
            userName.value = userData.value.name;
            previewAvatar.value = `https://admin.api.northexpokudus.com/assets/img/avatar/${userData.value.avatar}`;

            if (userData.value.avatar) {
                previewAvatar.value = `https://admin.api.northexpokudus.com/assets/img/avatar/${userData.value.avatar}`;
            } else {
                previewAvatar.value = `https://admin.api.northexpokudus.com/assets/img/avatar/default.png`;
            }
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
})
</script>


<!-- style kode diatas -->
<style scoped>
.update-profile-container {
    width: 100%;
    height: 100vh;
    padding: 50px 100px;
}

.update-profile-container .container {
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 100%;
    padding: 50px;
    border-radius: 30px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(120px);
    border: 1px solid var(--color-theme-100);
}

h2 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-theme-950);
    margin-bottom: 100px;
}

.user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

form {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    color: var(--color-theme-950);
}

form div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

form div label {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
}

form div input {
    padding: 1rem;
    border: 1px solid var(--color-theme-950);
    width: fit-content;
    margin-bottom: 10px;
    background-color: transparent;
}

form div input#name {
    border-radius: 0.5rem;
}

form div input:focus {
    outline: none;
    border-color: var(--color-primary-500);
}

form div input[type="file"] {
    padding: 0;
    border: none;
    margin-top: 20px;
}

form div input[type="file"]:focus {
    outline: none;
}

form .action {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
}

form button {
    padding: 8px 15px;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--color-primary-500);
    color: var(--color-theme-50);
    font-weight: 600;
    cursor: pointer;
    width: fit-content;
}

form button:focus {
    outline: none;
}

form button:hover {
    background-color: var(--color-primary-600);
}

form .kembali {
    background-color: transparent;
    border: 1px solid var(--color-primary-600);
    color: var(--color-primary-600);
    transition: .3s;
}

form .kembali:hover {
    background-color: var(--color-primary-600);
    color: var(--color-theme-50);
}

.circle-bg {
    position: absolute;
    top: 100px;
    right: 100px;
    width: 250px;
    height: 250px;
    background-color: var(--color-primary-400);
    border-radius: 50%;
    z-index: -1;
    animation: circleBg1 15s ease-in-out infinite;
}

.circle-bg:nth-child(2) {
    bottom: 300px;
    left: 300px;
    width: 200px;
    height: 200px;
    background-color: rgb(255, 0, 208);
    border-radius: 50%;
    z-index: -1;
    animation: circleBg2 13s ease-in-out infinite;
}

@keyframes circleBg1 {
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(-1000px);
    }

    100% {
        transform: translateX(0px);
    }
}

@keyframes circleBg2 {
    0% {
        transform: translateX(0px);
    }

    50% {
        transform: translateY(400px);
    }

    100% {
        transform: translateX(0px);
    }
}
</style>