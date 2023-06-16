<template>
    <div class="container">
        <div class="header">
            <div class="category">
                <PlaceholderAnimation width="20%" />
            </div>
            <h1>
                <PlaceholderAnimation width="40%" height="5rem" />
            </h1>
            <div class="lokasi">
                <PlaceholderAnimation class="icon" width="2%" border-radius="50%" />
                <PlaceholderAnimation width="20%" />
            </div>
            <div class="operasional">
                <PlaceholderAnimation class="icon" width="2%" border-radius="50%"/>
                <PlaceholderAnimation width="20%" />
            </div>
        </div>

        <div class="img-wrapper">
            <div class="img-box">
                <PlaceholderAnimation width="100%" height="30rem" border-radius="10px" />
            </div>
            <div class="img-list">
                <PlaceholderAnimation class="img" width="15%" height="6rem" border-radius="10px" />
                <PlaceholderAnimation class="img" width="15%" height="6rem" border-radius="10px" />
                <PlaceholderAnimation class="img" width="15%" height="6rem" border-radius="10px" />
                <PlaceholderAnimation class="img" width="15%" height="6rem" border-radius="10px" />
            </div>
        </div>

        <div class="description-container">
            <h1>
                <PlaceholderAnimation width="25%" height="3rem" />
            </h1>
            <p>
                <PlaceholderAnimation width="100%" height="7rem" />
            </p>
        </div>

        <div class="map-container">
            <h1>
                <PlaceholderAnimation width="20%" height="2.5rem" />
            </h1>
            <div class="map">
                <PlaceholderAnimation width="100%" height="30rem" />
            </div>
        </div>

        <div class="review-form">
            <h2>
                <PlaceholderAnimation width="40%" height="3rem" />
            </h2>
            <div class="rate">
                <PlaceholderAnimation width="20%" />
            </div>
            <div class="form">
                <form action="">
                    <div class="user-data">
                        <div class="form-group">
                            <label for="">
                                <PlaceholderAnimation width="20%" />
                            </label>
                            <PlaceholderAnimation width="100%" height="3rem" />
                        </div>
                        <div class="form-group">
                            <label for="">
                                <PlaceholderAnimation width="20%" />
                            </label>
                            <PlaceholderAnimation width="100%" height="3rem" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">
                            <PlaceholderAnimation width="20%" />
                        </label>
                        <PlaceholderAnimation width="100%" height="10rem" />
                    </div>
                    <PlaceholderAnimation class="button" width="20%" height="4rem" />
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import PlaceholderAnimation from '../PlaceholderAnimation.vue';
</script>

<style scoped>
.container {
    width: 100%;
    padding: 5rem 8.5rem;
}

.container .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
}

.container .header h1 {
    padding: 0.5rem 0;
}

.container .header .lokasi {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
}

.container .header .lokasi .icon {
    margin-right: 0.5rem;
}

.container .header .operasional {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
}

.container .header .operasional .icon {
    margin-right: 0.5rem;
}

.container .img-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
}

.container .img-wrapper .img-list {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
}

.container .img-wrapper .img-list .img {
    margin: 0 0.5rem;
}

.container .description-container {
    width: 100%;
    padding: 2rem 1rem;
}

.container .description-container h1 {
    padding: 0.5rem 0;
}

.container .map-container {
    width: 100%;
    padding: 2rem 1rem;
}

.container .map-container h1 {
    padding: 0.5rem 0;
}

.container .review-form {
    width: 100%;
    padding: 2rem 1rem;
}

.container .review-form h2 {
    padding: 0.5rem 0;
}

.container .review-form .rate {
    padding: 0.5rem 0;
}

.container .review-form .form {
    padding: 0.5rem 0;
}

.container .review-form .form .user-data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.container .review-form .form .user-data .form-group {
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
}   

.container .review-form .form .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
}

.container .review-form .form .form-group .button {
    margin-top: 1rem;
}

</style>