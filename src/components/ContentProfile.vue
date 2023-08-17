<template>
<div class="content">
    <div v-if="activeTab === 'detail'">
        <DetailUserProfile/>
    </div>
    <div v-else-if="activeTab === 'statusTiket'">
        <h1>Riwayat Tiket</h1>
        <ProfileTicketStatus/>
    </div>
</div>
</template>


<script>
import DetailUserProfile from './DetailUserProfile.vue'
import ProfileTicketStatus from './ProfileTicketStatus.vue';
export default {
    components: {
        DetailUserProfile,
        ProfileTicketStatus
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
    max-height: fit-content;
    min-height: 450px;
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
