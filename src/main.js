import { createApp } from 'vue'
import App from './App.vue'
import Picker from './modules/index'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Picker)

app.mount('#app')
