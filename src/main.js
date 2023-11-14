import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import Vue3Toastify from 'vue3-toastify'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Colada, { PiniaColadaPlugin } from 'colada-plugin'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
pinia.use(PiniaColadaPlugin)
app.use(Colada)
app.use(pinia)
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-center',
  theme: 'dark'
})
app.use(router)

app.mount('#app')
