import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router";
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(VueLazyload,{
    preLoad: 1.3,
    loading: '/loader.gif',
    attempt: 1
})
app.use(createPinia())
app.use(router)
app.mount('#app')
