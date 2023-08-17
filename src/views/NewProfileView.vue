<template>
<HeaderComponent />
<div class="profile-container">
    <h1>Profil</h1>
    <div class="container">
        <Sidebar @tab-clicked="handleTabClicked"/>
        <ContentProfile :active-tab="activeTab"/>
    </div>
</div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import Sidebar from '../components/SidebarProfile.vue'
import ContentProfile from '../components/ContentProfile.vue'

export default {
    components: {
        HeaderComponent,
        Sidebar,
        ContentProfile  
    },
    data() {
        return {
            activeTab: 'detail'
        }
    },
    methods: {
        handleTabClicked(tab) {
            this.activeTab = tab;
        }
    }
}
</script>

<style scoped>
.profile-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 70px 100px;
}

.profile-container h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-theme-950);
    max-width: 600px;
    text-align: center;
    margin: 70px auto;
}

.profile-container .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
}
</style>
