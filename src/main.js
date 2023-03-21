import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ECharts from 'vue-echarts'

const app = createApp(App)

app.use(router)
app.component('v-chart', ECharts)
app.mount('#app')
