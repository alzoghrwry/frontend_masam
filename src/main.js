import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'

createApp(App)
.use(createPinia())  
.use(router)         
.mount('#app')