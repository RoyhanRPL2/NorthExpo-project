<script setup>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import footerComponent from '../components/footer.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const kuliner = ref({
    data: {
        id: '',
        nama_warung: '',
        alamat: '',
        operasional: '',
        nama_kuliner: '',
        deskripsi: '',
        harga: '',
        foto: '',
        foto2: '',
        foto3: '',
    }
});

const route = useRoute();

function changeImage() {
    const smallImg = document.querySelectorAll('.small-images img');

    smallImg.forEach(img => img.addEventListener('click', changeSrc));

    function changeSrc() {
        const bigImg = document.querySelector('.big-image img');
        bigImg.src = this.src;
    }
}

onMounted(async () => {
    axios.get(`https://admin.api.northexpokudus.com/api/kuliner/${route.params.id}`)
        .then((response) => {
            kuliner.value = response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    changeImage();
});

</script>

<template>
    <HeaderComponent />
    <div class="container">
        <div class="detail-container">
            <div class="detail-kuliner">
                <div class="detail-title">
                    <h1>{{ kuliner.data.nama_kuliner }}</h1>
                    <div class="detail-info">
                        <p>{{ kuliner.data.nama_warung }}</p>
                        <p id="jam-operasional">{{ kuliner.data.operasional }}</p>
                    </div>
                </div>

                <div class="detail-desc">
                    <h4>Deskripsi</h4>
                    <p>{{ kuliner.data.deskripsi }}</p>
                    <h4>Harga</h4>
                    <p>Rp {{ kuliner.data.harga }}</p>
                    <h4>Alamat</h4>
                    <p>{{ kuliner.data.alamat }}</p>
                </div>
            </div>

            <div class="detail-content">
                <div class="grid-container">
                    <div class="big-image">
                        <img :src="'https://admin.api.northexpokudus.com/kuliner/' + kuliner.data.foto" alt="gambar besar" id="big-image">
                    </div>
                    <div class="small-images">
                        <img :src="'https://admin.api.northexpokudus.com/kuliner/' + kuliner.data.foto" alt="gambar kecil 1">
                        <img :src="'https://admin.api.northexpokudus.com/kuliner/' + kuliner.data.foto2" alt="gambar kecil 1">
                        <img :src="'https://admin.api.northexpokudus.com/kuliner/' + kuliner.data.foto3" alt="gambar kecil 2">
                    </div>
                </div>

                
            </div>
        </div>
    </div>

<footerComponent />
</template>

<style scoped>
.container {
    width: 100%;
    padding: 150px 100px;
}

.container .detail-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.detail-content {
    padding-left: 50px;
    width: 50%;
}

.detail-content img {
    width: 400px;
} 

.detail-container .detail-kuliner {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
}

.detail-title {
    width: 100%;
}

.detail-title h1 {
    font-size: 46px;
    font-weight: 800;
    line-height: 1.3;
    color: var(--color-theme-950);
    margin-bottom: 20px;
}

.detail-title div p {
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    color: var(--color-theme-950);
    margin-bottom: 10px;
}

.detail-title div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.detail-title div #jam-operasional {
    background-color: rgba(0, 0, 0, 0.06);
    padding: 5px 10px;
    border-radius: 10px;
}

.detail-kuliner .detail-desc {
    margin-top: 50px;
}

.detail-kuliner .detail-desc h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    color: var(--color-primary-500);
    margin-bottom: 10px;
}

.detail-kuliner .detail-desc p {
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    color: var(--color-theme-950);
    margin-bottom: 10px;
    text-align: justify;
}

.grid-container {
    display: flex;
    flex-direction: column;
}

.grid-container .big-image {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
}

.big-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: center;
    transition: .5s;
}

.grid-container .small-images {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
}

.small-images img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: center;
    transition: .5s;
    margin: 0 10px;
    border-radius: 10px;
}

@media screen and (max-width: 768px) {
    .container {
        padding: 130px 30px;
    }

    .container .detail-container {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .detail-content {
        padding-left: 0;
        width: 100%;
    }

    .detail-content img {
        width: 100%;
    }

    .detail-container .detail-kuliner {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .detail-title h1 {
        font-size: 36px;
        font-weight: 800;
        line-height: 1.3;
        color: var(--color-theme-950);
        margin-bottom: 20px;
        margin-top: 50px;
        text-align: center;
    }

    .detail-title .detail-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .detail-title .detail-info p {
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
        color: var(--color-theme-950);
        margin-bottom: 20px;
        text-align: center;
    }

    .grid-container {
        width: 100%;
    }

    .grid-container .big-image {
        height: 200px;
    }
    
    .grid-container .small-images {
        height: 80px;
        margin-top: 10px;
    }

    .small-images img {
        margin: 0 5px;
    }
}
</style>