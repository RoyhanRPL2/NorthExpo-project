<template>
<div class="sidebar-container">
    <div>
        <h3>Pengaturan</h3>

        <div class="sidebar">
            <div class="tab" @click="handleTabClick('detail')" :class="{ active: activeTab === 'detail' }">
                Detail
            </div>
            <div class="tab" @click="handleTabClick('statusTiket')" :class="{ active: activeTab === 'statusTiket' }">
                Riwayat Tiket
            </div>
            <div class="tab" @click="handleTabClick('daftarKeinginan')" :class="{ active: activeTab === 'daftarKeinginan' }">
                Daftar Keinginan
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'detail'
        };
    },
    methods: {
        handleTabClick(tab) {
            this.activeTab = tab;
            this.$emit('tab-clicked', tab);
        },
    }
}
</script>

<style>
.sidebar-container {
    height: 450px;
    width: fit-content;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sidebar-container h3 {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-theme-950);
}

.sidebar-container .sidebar {
    margin-top: 30px;
    margin-right: 70px;
    width: max-content;
}

.sidebar-container .sidebar .tab {
    cursor: pointer;
    color: var(--color-theme-950);
    padding: 5px 15px;
    border-radius: 5px;
    width: fit-content;
    margin-bottom: 10px;
    font-size: 18px;
}

.sidebar-container .sidebar .tab.active {
    font-weight: 600;
    background-color: var(--color-secondary-100);
}

.sidebar-container .btn-logout {
    background-color: var(--color-theme-950);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    width: fit-content;
    align-self: flex-start;
}

.sidebar-container .btn-logout .icon {
    margin-left: 10px;
}
</style>
