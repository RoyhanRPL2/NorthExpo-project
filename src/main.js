import { createApp } from 'vue'
import App from './App.vue'
import login from './views/LoginView.vue'
import router from './router'
import store from './store'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar, faUserSecret, faArrowRight, faEye, faEyeSlash, faClock, faChevronDown, faCalendarDays, faCircleExclamation, faMoneyBillWave, faMoneyBill, faPlus } from '@fortawesome/free-solid-svg-icons'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faLocationDot, faStar, faArrowRight, faEye, faEyeSlash, faClock, faChevronDown, faCalendarDays, faCircleExclamation, faMoneyBillWave, faMoneyBill, faPlus)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store) 

app.mount('#app')
