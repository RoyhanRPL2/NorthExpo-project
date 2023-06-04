<template>
    <div class="ticket-status">
        <h1>Status Tiket</h1>
        <div class="status">
            <div class="status-container">
                <ul>
                    <li class="active">dalam proses</li>
                    <li>dikonfirmasi</li>
                    <li>dalam tunggu</li>
                    <li>dibatalkan</li>
                    <li>selesai</li>
                </ul>
            </div>

            <div class="status-preview">
                <div class="card-ticket">
                    <!-- add random image -->
                    <img src="https://picsum.photos/700" alt="random image">
                </div>
                <div class="ticket-value">
                    <span>*</span>
                    <h5>1 tiket</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ticket-status {
    width: fit-content;
    /* background-color: blue; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.ticket-status h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: var(--color-theme-950);
    max-width: 600px;
    text-align: center;
    margin-bottom: 40px;
} 

.ticket-status .status {
    display: flex;
}

.status .status-container {
    margin-right: 100px;
}

.status .status-container ul li {
    list-style: none;
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-theme-950);
    cursor: pointer;
    transition: 700ms;
    opacity: 0.5;
    text-transform: capitalize;
}

.status .status-container ul li.active {
    opacity: 1;
    background: linear-gradient(0deg, var(--color-primary-500), var(--color-primary-500)) no-repeat right bottom / 0 var(--bg-h);
    transition: background-size 350ms;
    line-height: 1.5;
    --bg-h: 10%;
    background-size: 100% var(--bg-h);
    background-position-x: left;
}

.status .status-preview {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.status .status-preview .card-ticket {
    width: 300px;
    height: 200px;
    background-color: var(--color-primary-400);
    border-radius: 20px;
    margin-right: 20px;
    overflow: hidden;
}

.status .status-preview .card-ticket img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.status .status-preview .ticket-value {
    display: flex;
    padding-right: 20px;
    margin-top: 20px;
}

.status .status-preview .ticket-value span {
    font-size: 16px;
    font-weight: 500;
    color: red;
    margin-right: 5px;
}

.status .status-preview .ticket-value h5 {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-theme-950);
    text-transform: capitalize;
}
</style>