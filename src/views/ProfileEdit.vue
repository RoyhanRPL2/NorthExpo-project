<template>
    <div class="update-profile-container">
        <div class="container">
            <h2>Ubah Profil</h2>
            <form @submit.prevent="saveProfile">
                <div>
                    <label for="avatar">Foto Kamu :</label>
                    <img :src="'https://admin.api.northexpokudus.com/assets/img/avatar/' + user.user.avatar" alt=""
                        class="user-avatar">
                    <input type="file" id="avatar" @change="handlePhotoUpload" accept="image/*">
                </div>
                <div>
                    <div>
                        <label for="name">Nama :</label>
                        <input type="text" id="name" v-model="user.user.name">
                    </div>
                    <div>
                        <label>Email :</label>
                        <p>{{ user.user.email }}</p>
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

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            user: null,
        };
    },
    created() {
        const userInfo = localStorage.getItem('user-info');
        if (userInfo) {
            const parsedUserInfo = JSON.parse(userInfo);
            this.user = {
                ...parsedUserInfo
            };
        }
    },
    methods: {
        handlePhotoUpload(event) {
            const file = event.target.files[0];
            this.user.user.avatar = file;
        },
        saveProfile() {
            const id = this.user.user.id;
            const formData = new FormData();
            formData.append('name', this.user.user.name);
            if (this.user.user.avatar) {
                formData.append('avatar', this.user.user.avatar);
            }

            axios.post(`https://admin.api.northexpokudus.com/api/auth/user/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },

            })
                .then(response => {
                    console.log('Profile successfully saved:', response.data);
                    // Simpan data pengguna yang diperbarui ke local storage
                    localStorage.setItem('user-info', JSON.stringify(this.user));
                    // Alihkan pengguna kembali ke halaman profil
                    this.$router.push('/profile');
                    Swal.mixin({ // Integrate Swal.mixin here
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer);
                            toast.addEventListener('mouseleave', Swal.resumeTimer);
                        },
                    }).fire({
                        icon: 'success',
                        title: 'Profil Berhasil Diperbarui',
                    });
                })
                .catch(error => {
                    console.error('Error saving profile:', error);
                    Swal.fire({ // Use Swal.fire for error messages
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Terjadi Kesalahan. Coba Kembali!',
                    });
                });
        },
    },
};
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