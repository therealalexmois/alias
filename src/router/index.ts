import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/pages/home.vue"
import RulesPage from "@/pages/rules.vue"
import StartPage from "@/pages/start.vue"
import GamePage from "@/pages/game.vue"

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
      component: RulesPage,
    },
    {
      path: "/start",
      name: "start",
      component: StartPage,
    },
    {
      path: "/game",
      name: "game",
      component: GamePage,
    },
  ],
})

export default router
