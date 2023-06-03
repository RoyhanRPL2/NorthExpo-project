<template>
    <div class="about-container">
        <div class="about-title">
            <h4>Tentang Kami</h4>
            <h1>Explore Destinasi Wisata Utara dengan NorthExpo</h1>
        </div>
        <a href="#">Lihat Semua Destinasi</a>
        <div class="description">
            <div>
                <h6>Apa itu NorthExpo?</h6>
                <p>Website destinasi wisata yang fokus pada wilayah utara kota Kudus. Kami memberikan informasi lengkap
                    mengenai objek wisata dan kuliner yang terdapat di daerah tersebut serta memberikan tips dan rekomendasi
                    untuk perjalanan yang lebih menyenangkan.</p>
            </div>

            <div>
                <h6>Tujuan Kami</h6>
                <p>Tujuan kami adalah mempromosikan keindahan dan keunikan wilayah utara kota Kudus kepada wisatawan lokal
                    dan membantu memperkuat industri pariwisata di daerah tersebut.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-container {
    width: 100%;
    height: 90vh;
    background-color: var(--color-theme-50);
    padding: 70px 100px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.about-container .about-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about-container .about-title h4 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary-500);
}

.about-container .about-title h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-theme-950);
    margin-top: 20px;
    margin-bottom: 40px;
    max-width: 600px;
    text-align: center;
}

.about-container a {
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    color: var(--color-theme-50);
    text-decoration: none;
    padding: 12px 18px;
    background-color: var(--color-primary-500);
    border-radius: 7px;
    transition: 600ms;
}

.about-container a:hover {
    background-color: var(--color-primary-700);
}

.about-container .description {
    display: flex;
    margin-top: 80px;
}

.description div {
    width: 50%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.description div h6 {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-theme-950);
    margin-bottom: 20px;
    background-image: linear-gradient(to right, var(--color-primary-500), var(--color-primary-500));
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% 3px;
}

.description div p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
    color: var(--color-theme-950);
    text-align: justify;
}
</style>