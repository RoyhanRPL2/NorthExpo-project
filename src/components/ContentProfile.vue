<template>
<div class="content">
    <div v-if="activeTab === 'detail'">
        <DetailUserProfile/>
    </div>
    <div v-else-if="activeTab === 'statusTiket'">
        <h1>Status Tiket</h1>
    </div>
    <div v-else-if="activeTab === 'daftarKeinginan'">
        <h1>Daftar Keinginan</h1>
    </div>
</div>
</template>


<script>
import DetailUserProfile from './DetailUserProfile.vue'
export default {
    components: {
        DetailUserProfile
    },
    props: {
        activeTab: {
            type: String,
            required: true
        }
    },
}
</script>


<style scoped>
.content {
    width: 100%;
    height: 450px;
    border-radius: 20px;
    background-color: var(--color-secondary-50);
    padding: 30px 40px;
}

.content h1 {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-theme-950);
}
</style>
