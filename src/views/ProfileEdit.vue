<template>
<div>
    <h2>Edit Profile</h2>
    <form @submit.prevent="saveProfile">
        <div>
            <label for="avatar">Photo:</label>
            <img :src="'https://admin.api.northexpokudus.com/assets/img/avatar/' + user.user.avatar" alt="" class="user-avatar">
            <input type="file" id="avatar" @change="handlePhotoUpload" accept="image/*">
        </div>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="user.user.name">
        </div>
        <div>
            <label>Email:</label>
            <p>{{ user.user.email }}</p>
        </div>
        <button type="submit">Simpan</button>
        <router-link to="/profile">
            <button class="kembali" type="button">Kembali</button>
        </router-link>
    </form>
</div>
</template>

<script>
import axios from 'axios';

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
                    alert('Profile successfully saved')
                })
                .catch(error => {
                    console.error('Error saving profile:', error);
                    alert('Error saving profile. Please try again.' + error)
                });
        },
    },
};
</script>

<!-- style kode diatas -->
<style scoped>
h2 {
    color: var(--color-theme-950);
    padding: 100px 0 0 100px;
    font-weight: 600;
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
    flex-direction: column;
    gap: 1rem;
    padding: 50px 100px 100px 100px;
    color: var(--color-theme-950);
}

form div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

form div label {
    font-weight: bold;
}

form div input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-theme-950);
    width: fit-content;
}

form div input:focus {
    outline: none;
    border-color: var(--color-primary-500);
}

form div input[type="file"] {
    padding: 0;
    border: none;
}

form div input[type="file"]:focus {
    outline: none;
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

form .kemmbali {
    background-color: transparent;
    border: 1px solid var(--color-theme-950);
}
</style>