<template>
    <div class="profile-container">
        <!-- show random image from internet -->
        <img src="https://picsum.photos/200" alt="random image">
        <h3>Mavis</h3>
        <h5>mavis@gmail.com</h5>
        <div class="btn-edit">
            <button class="btn btn-primary">Edit Profile</button>
        </div>
    </div>
</template>

<style scoped>
.profile-container {
    width: 600px;
    height: fit-content;
    padding: 70px 0;
    background-color: var(--color-secondary-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    margin-right: 100px;
}

.profile-container img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.profile-container h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-theme-950);
    margin: 20px 0 5px 0;
}

.profile-container h5 {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-theme-400);
    margin-bottom: 30px;
}

.profile-container .btn-edit button {
    padding: 8px 18px;
    font-size: 16px;
    color: var(--color-theme-50);
    background-color: var(--color-primary-500);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 600ms;
}

.profile-container .btn-edit button:hover {
    background-color: var(--color-primary-600);
}
</style>