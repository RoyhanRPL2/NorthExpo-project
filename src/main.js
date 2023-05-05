import { createApp } from 'vue'
import App from './App.vue'
import login from './views/LoginView.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
