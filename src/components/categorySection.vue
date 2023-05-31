<script setup>


</script>

<template>
    <div class="category">
        <ul class="category-list">
            <li>
                <div class="category-item alam">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <p>Wisata Alam</p>
                </div>
            </li> 
            <li>
                <div class="category-item hiburan">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <p>Wisata Hiburan</p>
                </div>
            </li>
            <li>
                <div class="category-item religi">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <p>Wisata Religi</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.category {
    width: 20%;
    height: 100%;
    padding: 0 1rem;
}

.category-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.category-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
}

.category-item p {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
}

.alam {
    color: limegreen;
    border: 1px solid limegreen;
}

.budaya {
    color: blue;
    border: 1px solid blue;
}

.hiburan {
    color: burlywood;
    border: 1px solid #f1c40f;
}

.religi {
    color: lightcoral;
    border: 1px solid lightcoral;
}
</style>