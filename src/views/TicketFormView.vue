<template>
    <HeaderComponent />
    <div class="container">
        <OrderDetail />
        <FormTicket />
    </div>
    
</template>

<script>
import OrderDetail from '../components/OrderDetail.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FormTicket from '../components/TicketForm.vue';
import { ref } from 'vue'

export default {
    components: {
        OrderDetail,
        HeaderComponent,
        FormTicket
    },
    setup() {
        
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 6rem 2rem;
}

@media (max-width: 768px) {
    .container {
        align-items: center;
        flex-direction: column;
        gap: 2rem;
    }
}

@media (max-width: 425px) {
    .container {
        padding: 6rem 1rem;
    }
}

</style>