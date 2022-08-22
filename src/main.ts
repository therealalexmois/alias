import { createApp } from "vue"
import { createPinia } from "pinia"
import { PiniaLogger } from "pinia-logger"

import router from "./router"

import App from "./app.vue"

import "@/assets/index.css"

const pinia = createPinia()
pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: process.env.NODE_ENV === "production",
  }),
)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount("#app")
