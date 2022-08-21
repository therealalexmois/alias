import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/pages/home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("@/pages/rules.vue"),
    },
    {
      path: "/start",
      name: "start",
      component: () => import("@/pages/start.vue"),
    },
    {
      path: "/game",
      name: "game",
      component: () => import("@/pages/game.vue"),
    },
  ],
})

export default router
