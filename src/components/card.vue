<template>
    <div class="container">
        <img src="https://images.unsplash.com/photo-1571863478861-395857be5e07?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM3NzMyMTZ8&ixlib=rb-4.0.3&q=85" alt="">
        <div class="category">
            <p>Nature Tourism</p>
        </div>
        <div class="card-title">
            <div class="wrapper">
                <p id="title">Gunung Muria</p>
            </div>

            <div class="lokasi">
                <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" size="lg" />
                <p>Ds. Ketapang, Kec. Dawe</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 300px;
    height: 300px;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 20px 20px 60px #d9d9d9,
        -20px -20px 60px #ffffff;
    position: relative;
}

.container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.category {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0.8rem;
    position: absolute;
    top: 0;
    right: 0;
}

.category p {
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: #61832d;
    border-radius: 4px;
    padding: 0.2rem 0.5rem;
}

.card-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.8rem;
    position: absolute;
    bottom: 0;
}

.card-title p {
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: #fff;
}

.card-title .lokasi {
    display: flex;
    align-items: center;
}

.card-title .lokasi .icon {
    margin-right: 0.5rem;
    color: #15ACC5;
}

.card-title .lokasi p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    background-color: transparent;
}
</style>