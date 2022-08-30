import { createRouter, createWebHistory } from "vue-router"

import HomePage from "@/pages/home.vue"
import IntroPage from "@/pages/intro.vue"
import RulesPage from "@/pages/rules.vue"
import TeamsPage from "@/pages/teams.vue"
import ThemesPage from "@/pages/themes.vue"
import StartsPage from "@/pages/starts.vue"
import ScoreboardPage from "@/pages/scoreboard.vue"
import GamePage from "@/pages/game.vue"
import WinnerPage from "@/pages/winner.vue"

import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      transition: "slide-right",
    },
  },
  {
    path: "/intro",
    name: "intro",
    component: IntroPage,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/rules",
    name: "rules",
    component: RulesPage,
    meta: {
      transition: "slide-right",
    },
  },
  {
    path: "/teams",
    name: "teams",
    component: TeamsPage,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/themes",
    name: "themes",
    component: ThemesPage,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/start",
    name: "start",
    component: StartsPage,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/game",
    name: "game",
    component: GamePage,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/scoreboard",
    name: "scoreboard",
    component: ScoreboardPage,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/winner",
    name: "winner",
    component: WinnerPage,
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
