<template>
    <div class="ticket-form-container">
        <h2>Form Pemesanan Tiket</h2>
        <form action="">
            <div class="form-group">
                <label for="name">No.Hp</label>
                <input type="text" name="name" id="name">
            </div>
            <div class="form-group">
                <label for="name">Jumlah Orang</label>
                <input type="number" name="name" id="name">
                <p>*jumlah orang dalam rombongan</p>
            </div>
            <div class="form-group">
                <label for="name">Email</label>
                <input type="text" name="name" id="name">
                <p>*Untuk menerima link unduh bukti</p>
            </div>
        </form>
        <div class="term-condition">
            <div class="first-term">
                <p>1. Syarat dan ketentuan berkunjung</p>
                <ul>
                    <li>Menjaga kebersihan tempat wisata</li>
                    <li>Mengikuti himbauan dan petunjuk petugas wisata</li>
                    <li>Tiket yang sudah dibayar tidak dapat dikembalikan (non-refundable)</li>
                </ul>
            </div>
            <div class="second-term">
                <p>2. Saya dan/atau rombongan telah memahami, setuju dan bertanggung jawab dengan segala resiko apabila
                    tidak mematuhi syarat & ketentuan yang telah ditetapkan di atas.</p>
            </div>
        </div>
        <div class="confirm-text">
            <input type="checkbox">
            <p>Saya telah membaca dan menyetujui syarat dan ketentuan berkunjung</p>
        </div>
        <div class="button-container">
            <button class="btn btn-primary">Pesan</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.ticket-form-container {
    width: 30%;
    border: 1px solid var(--color-theme-100);
    box-shadow: 0px 0px 10px var(--color-theme-100);
    padding: 2rem;
    border-radius: 10px;
}

.ticket-form-container h2 {
    text-align: center;
    color: var(--color-theme-950);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.ticket-form-container form {
    display: flex;
    flex-direction: column;
}

.ticket-form-container .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.ticket-form-container .form-group label {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.3rem;
}

.ticket-form-container .form-group input {
    padding: 0.5rem;
    border: 1px solid #667085;
    border-radius: 5px;
}

.ticket-form-container .form-group p {
    font-size: 0.8rem;
    color: var(--color-theme-950);
    margin-top: 0.5rem;
}

.ticket-form-container .payment {
    margin-top: 1.5rem;
}

.ticket-form-container .payment h2 {
    text-align: center;
    color: var(--color-theme-950);
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}
.ticket-form-container .payment-method-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
}

.ticket-form-container .payment-method-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 1rem;
    transition: background-color 0.2s ease;
    cursor: pointer;
}

.payment-method-item.active {
    background-color: var(--color-primary-500);
    border: none;
}

.ticket-form-container .payment-method-item .bill-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: var(--color-theme-950);
}

.ticket-form-container .payment-method-item.active .bill-icon {
    fill: #fff;
}

.ticket-form-container .payment-method-item .qris-icon {
    width: 50%;
    margin-bottom: 0.5rem;
}

.qris-icon {
    transition: filter 0.2s ease;
}

.ticket-form-container .payment-method-item.active .qris-icon {
    filter: invert(100%);
}


.ticket-form-container .payment-method-item h3 {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
    font-weight: 700;
    text-align: center;
}

.ticket-form-container .payment-method-item.active h3 {
    color: #fff;
}

.ticket-form-container .payment-method-item p {
    font-size: 0.8rem;
    color: var(--color-theme-950);
    text-align: center;
}

.ticket-form-container .payment-method-item.active p {
    color: #fff;
}

.ticket-form-container .term-condition {
    margin-bottom: 1rem;
}

.ticket-form-container .term-condition .first-term {
    margin-bottom: 0.7rem;
    padding: 0.5rem;
}

.ticket-form-container .term-condition .first-term p {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
}

.ticket-form-container .term-condition .first-term ul {
    margin-left: 0.3rem;
}

.ticket-form-container .term-condition .first-term ul li {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
}

.ticket-form-container .term-condition .second-term {
    margin-bottom: 0.5rem;
}

.ticket-form-container .term-condition .second-term p {
    font-size: 1rem;
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
    padding: 0.5rem;
}

.ticket-form-container .confirm-text {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;
}

.ticket-form-container .confirm-text input {
    margin-right: 0.6rem;
}

.ticket-form-container .confirm-text p {
    color: var(--color-theme-950);
    margin-bottom: 0.5rem;
}

.ticket-form-container .button-container {
    display: flex;
    justify-content: center;
}

.ticket-form-container .button-container button {
    width: 50%;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    background-color: var(--color-primary-500);
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
}</style>