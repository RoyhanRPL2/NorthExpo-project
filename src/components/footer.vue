<template>
    <footer>
        <div class="wrapper">
            <div class="item-container">
                <div class="footer-item">
                    <img src="@/components/icons/email.svg" alt="">
                    <h3>Mail</h3>
                    <p>northexpo.develop@gmail.com</p>
                </div>
                <div class="footer-item">
                    <img src="@/components/icons/cellphone.svg" alt="">
                    <h3>Hubungi Kami</h3>
                    <p>+6282243460612</p>
                </div>
                <div class="footer-item">
                    <img src="@/components/icons/location.svg" alt="">
                    <h3>Temukan Kami</h3>
                    <p>Jl Sukun Raya No.09, Besito Kulon, Besito, Kec. Gebog, Kabupaten Kudus, Jawa Tengah</p>
                </div>
            </div>
            <ul class="social-media">
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="@/components/icons/instagram-icon.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="@/components/icons/facebook-icon.svg" alt="">
                    </a>
                    
                </li>
                <li>
                    <a href="https://youtube.com/" target="_blank">
                        <img src="@/components/icons/youtube-icon.svg" alt="">
                    </a>
                    
                </li>
                <li>
                    <a href="https://www.tiktok.com/" target="_blank">
                        <img src="@/components/icons/tiktok-icon.svg" alt="">
                    </a>
                </li>
            </ul>
            <div class="footer-bottom">
                <div class="vektor-wrapper">
                    <img class="vektor1" src="@/assets/footer-vektor1.svg" alt="">
                    <img class="vektor2" src="@/assets/footer-vektor2.svg" alt="">
                </div>

                <div class="copyright">
                    <div class="copyright-wrapper">
                        <p>Copyright © 2023 | Developed by 4ranger Team</p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 30%;
    background-color: var(--color-primary-900);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}


.wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-900);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
}

.wrapper .item-container {
    width: 100%;
    padding: 0 2rem;
    padding-top: 2rem;
    position: relative;
    display: flex;
}

.wrapper .item-container .footer-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.wrapper .item-container .footer-item img {
    width: 45px;
    height: 45px;
    margin-bottom: 0.9rem;
}

.wrapper .item-container .footer-item h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
    color: var(--color-primary-600);
    text-transform: uppercase;
}

.wrapper .item-container .footer-item p {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    color: var(--vt-c-white);
    padding: 0 1rem;
}

.wrapper .social-media {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.1rem;
    padding: 3rem 2rem;
    margin-bottom: 20px;
}

.wrapper .social-media li {
    width: 40px;
    height: 40px;
    margin: 0 1rem;
    list-style: none;
}

.wrapper .social-media li img {
    width: 85%;
    height: 85%;
}

.wrapper .footer-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;  
    position: relative;
    bottom: 0;
}

.wrapper .footer-bottom .vektor-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.wrapper .footer-bottom .vektor-wrapper img {
    width: 100%;
    position: absolute;
    bottom: 0;
}

.wrapper .copyright {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
}

.wrapper .copyright .copyright-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: row;
    position: relative;
    background-color: var(--color-primary-950);
    padding: 1rem;
}
.wrapper .footer-bottom .copyright-wrapper p {
    width: 50%;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-primary-600);
    text-align: center;
}


@media (max-width: 1024px) {
    footer {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .wrapper .item-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        padding-top: 2rem;
    }

    .wrapper .item-container .footer-item {
        width: 100%;
        padding: 0;
        padding-bottom: 2rem;
    }

    .wrapper .item-container .footer-item img {
        width: 40px;
        height: 40px;
        margin-bottom: 0.9rem;
    }

    .wrapper .item-container .footer-item h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        color: var(--color-primary-600);
        text-transform: uppercase;
    }

    .wrapper .item-container .footer-item p {
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        padding: 0 1rem;
    }

    .wrapper .social-media {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.1rem;
        padding: 3rem 2rem;
        margin-bottom: 20px;
    }

    .wrapper .social-media li {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        list-style: none;
    }

    .wrapper .social-media li img {
        width: 85%;
        height: 85%;
    }

    .wrapper .footer-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;  
        position: relative;
        bottom: 0;
    }

    .wrapper .footer-bottom .vektor-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }

    .wrapper .footer-bottom .vektor-wrapper img {
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .wrapper .footer-bottom .copyright {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: var(--color-primary-950);
        padding: 1rem;
    }

    .wrapper .footer-bottom .copyright  .copyright-wrapper p {
        width: 70%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-primary-600);
        text-align: center;
    }
}


@media (max-width: 900px) {
    footer {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .wrapper .item-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        padding-top: 2rem;
    }

    .wrapper .item-container .footer-item {
        width: 100%;
        padding: 0;
        padding-bottom: 2rem;
    }

    .wrapper .item-container .footer-item img {
        width: 40px;
        height: 40px;
        margin-bottom: 0.9rem;
    }

    .wrapper .item-container .footer-item h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        color: var(--color-primary-600);
        text-transform: uppercase;
    }

    .wrapper .item-container .footer-item p {
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        padding: 0 1rem;
    }

    .wrapper .social-media {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.1rem;
        padding: 3rem 2rem;
        margin-bottom: 20px;
    }

    .wrapper .social-media li {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        list-style: none;
    }

    .wrapper .social-media li img {
        width: 85%;
        height: 85%;
    }

    .wrapper .footer-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;  
        position: relative;
        bottom: 0;
    }

    .wrapper .footer-bottom .vektor-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }

    .wrapper .footer-bottom .vektor-wrapper img {
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .wrapper .footer-bottom .copyright {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
    }

    .wrapper .footer-bottom  .copyright-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: var(--color-primary-950);
        padding: 1rem;
    }

    .wrapper .footer-bottom .wrapper p {
        width: 75%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-primary-600);
        text-align: center;
    }
}

@media (max-width: 768px) {
    footer {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .wrapper .item-container {
        flex-direction: column;
        padding: 0;
    }

    .wrapper .item-container .footer-item {
        width: 100%;
        padding: 1.5rem 0;
    }

    .wrapper .item-container .footer-item img {
        width: 45px;
        height: 45px;
        margin-bottom: 0.9rem;
    }

    .wrapper .item-container .footer-item h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        color: var(--color-primary-600);
        text-transform: uppercase;
    }

    .wrapper .item-container .footer-item p {
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        padding: 0 0.7rem;
    }

    .wrapper .social-media {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.1rem;
        padding: 3rem 2rem;
        margin-bottom: 20px;
    }

    .wrapper .social-media li {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        list-style: none;
    }

    .wrapper .social-media li img {
        width: 85%;
        height: 85%;
    }

    .wrapper .footer-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        bottom: 0;
    }

    .wrapper .footer-bottom .vektor-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }

    .wrapper .footer-bottom .vektor-wrapper img {
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .wrapper .footer-bottom .copyright {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: var(--color-primary-950);
        padding: 1rem;
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper p {
        width: 80%;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
    }
}

@media screen and (max-width: 600px) {
    footer {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .wrapper .item-container {
        flex-direction: column;
        padding: 0;
    }

    .wrapper .item-container .footer-item {
        width: 100%;
        padding: 1.5rem 0;
    }

    .wrapper .item-container .footer-item img {
        width: 45px;
        height: 45px;
        margin-bottom: 0.9rem;
    }

    .wrapper .item-container .footer-item h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        color: var(--color-primary-600);
        text-transform: uppercase;
    }

    .wrapper .item-container .footer-item p {
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        padding: 0 0.7rem;
    }

    .wrapper .social-media {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.1rem;
        padding: 3rem 2rem;
        margin-bottom: 20px;
    }

    .wrapper .social-media li {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        list-style: none;
    }

    .wrapper .social-media li img {
        width: 85%;
        height: 85%;
    }

    .wrapper .footer-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        bottom: 0;
    }

    .wrapper .footer-bottom .vektor-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        position: relative;
    }

    .wrapper .footer-bottom .vektor-wrapper img {
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .wrapper .footer-bottom .copyright {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: var(--color-primary-950);
        padding: 1rem;
    }

    .wrapper .footer-bottom .wrapper p {
        width: 80%;
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-primary-600);
        text-align: center;
    }
}

@media (max-width: 500px) {
    footer {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .wrapper .item-container {
        flex-direction: column;
        padding: 0;
    }

    .wrapper .item-container .footer-item {
        width: 100%;
        padding: 1.5rem 0;
    }

    .wrapper .item-container .footer-item img {
        width: 45px;
        height: 45px;
        margin-bottom: 0.9rem;
    }

    .wrapper.item-container.footer-item h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        color: var(--color-primary-600);
        text-transform: uppercase;
    }

    .wrapper .item-container .footer-item p {
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        padding: 0 0.7rem;
    }

    .wrapper .social-media {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.1rem;
        padding: 3rem 2rem;
        margin-bottom: 20px;
    }

    .wrapper .social-media li {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        list-style: none;
    }

    .wrapper .social-media li img {
        width: 100%;
    }

    .wrapper .footer-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        bottom: 0;
    }

    .wrapper .footer-bottom .vektor-wrapper {
        display: none;
    }

    .wrapper .footer-bottom .vektor-wrapper img {
        display: none;
    }

    .wrapper .footer-bottom .copyright {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        position: relative;
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper {
        width : 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
    }

    .wrapper .footer-bottom .copyright-wrapper p {
        width: 80%;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
    }
    
}

@media (max-width: 425px) {
    footer {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .wrapper .item-container {
        flex-direction: column;
        padding: 0;
    }

    .wrapper .item-container .footer-item {
        width: 100%;
        padding: 1.5rem 0;
    }

    .wrapper .item-container .footer-item img {
        width: 45px;
        height: 45px;
        margin-bottom: 0.9rem;
    }

    .wrapper .item-container .footer-item h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        color: var(--color-primary-600);
        text-transform: uppercase;
    }

    .wrapper .item-container .footer-item p {
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        padding: 0 0.7rem;
    }

    .wrapper .social-media {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.1rem;
        padding: 3rem 2rem;
        margin-bottom: 20px;
    }

    .wrapper .social-media li {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
        list-style: none;
    }

    .wrapper .social-media li img {
        width: 100%;
    }

    .wrapper .footer-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        bottom: 0;
    }

    .wrapper .footer-bottom .vektor-wrapper {
        display: none;
    }

    .wrapper .footer-bottom .vektor-wrapper img {
        display: none;
    }

    .wrapper .footer-bottom .copyright {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        position: relative;
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper {
        width : 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper p {
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
    }
}


@media (max-width: 375px) {
    footer {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .wrapper .item-container {
        flex-direction: column;
        padding: 0;
    }

    .wrapper .item-container .footer-item {
        width: 100%;
        padding: 1rem 0;
    }

    .wrapper .item-container .footer-item img {
        width: 40px;
        margin-bottom: 0.9rem;
    }

    .wrapper .item-container .footer-item h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        color: var(--color-primary-600);
        text-transform: uppercase;  
    }

    .wrapper .item-container .footer-item p {
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        color: var(--color-primary-600);
        padding: 0 0.7rem;
    }

    .wrapper .social-media {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .wrapper .social-media li {
        width: 100%;
        margin: 0 1rem;
        list-style: none;
    }

    .wrapper .social-media li img {
        width: 30px;
    }

    .wrapper .footer-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        bottom: 0;
    }

    .wrapper .footer-bottom .vektor-wrapper {
        display: none;
    }

    .wrapper .footer-bottom .vektor-wrapper img {
        display: none;
    }

    .wrapper .footer-bottom .copyright {
        width : 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;    
    }

    .wrapper .footer-bottom .copyright .copyright-wrapper {
        width : 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .wrapper .footer-bottom .wrapper p {
        width: 80%;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
    }
}
</style>