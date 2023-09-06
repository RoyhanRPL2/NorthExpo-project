<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import { onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter();


onMounted(() => {
    const map = L.map('map').setView([-6.694299268887508, 110.88649893153989], 12);

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    let religiIcon = new L.Icon({
        iconUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: lightcoral;" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

    let budayaIcon = new L.Icon({
        iconUrl:
            `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: blue;" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

    let AlamIcon = new L.Icon({
        iconUrl:
            `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: limegreen;" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

    let hiburanIcon = new L.Icon({
        iconUrl:
            `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: burlywood;" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });

    axios.get('https://admin.api.northexpokudus.com/api/destinasi').then((response) => {
        const data = response.data.data;
        const self = this;
        data.forEach((item) => {
            const link = `<a href="#" data-id="${item.id}">Lihat Detail</a>`;

            const marker = L.marker([item.latitude, item.longitude]);
            marker.setIcon(item.kategori.nama == 'Wisata Alam' ? AlamIcon : item.kategori.nama == 'Wisata Hiburan' ? hiburanIcon : item.kategori.nama == 'Wisata Religi' ? religiIcon : null);

            marker.addTo(map).bindPopup(`<b>${item.nama}</b><br>${item.alamat}<br>${link}`);

            marker.on('popupopen', function (event) {
                const clickedLink = event.popup._contentNode.querySelector('a');
                const id = clickedLink.getAttribute('data-id');
                clickedLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    router.push({ name: 'detail-destinasi', params: { id: id } });
                });
            });
        });
    })
        .catch((error) => {
            console.log(error);
        });

});
</script>

<template>
    <div id="map"></div>
</template>


<style>
#map {
    width: 1000px;
    height: 500px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 1rem 0;
}

.religi-icon {
    fill: red;
}

@media screen and (max-width: 1024px) {
    #map {
        width: 100%;
        height: 400px;
        margin-bottom: 2rem;
    }
}

@media screen and (max-width: 768px) {
    #map {
        width: 100%;
        height: 400px;
        margin-bottom: 2rem;
    }
}
</style>