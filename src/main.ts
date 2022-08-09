import { createApp } from "vue"
import router from "./router"

import App from "./app.vue"

import "@/assets/index.css"

const app = createApp(App)

app.use(router)

app.mount("#app")
