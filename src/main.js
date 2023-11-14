import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import Vue3Toastify from 'vue3-toastify'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Colada, { PiniaColadaPlugin } from 'colada-plugin'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(PiniaColadaPlugin)
app.use(Colada)
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-center',
  theme: 'dark'
})
app.use(router)

app.mount('#app')
