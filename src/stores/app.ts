import { defineStore } from "pinia"

import teams from "@/db/teams.json"
import themes from "@/db/themes.json"

import type { ITeam, ITheme } from "@/types"

const initalSelectedTheme = themes.themes.find(
  (theme) => theme.slug === "common",
)

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    settings: {
      requiredPoints: 50,
    },
    teams: [...teams.teams.slice(0, 2)] as ITeam[],
    themes: [...themes.themes],
    chosenThemes: [initalSelectedTheme] as ITheme[],
    scores: {} as Record<number, number>,
    nextId: 0,
  }),
  actions: {
    addTeam(title: string) {
      if (!title.length) return

      this.teams.push({
        id: this.nextId++,
        title,
      })
    },
    removeTeam(team: ITeam) {
      this.teams.splice(this.teams.indexOf(team), 1)
    },
    selectTheme(theme: ITheme) {
      const idx = this.chosenThemes.indexOf(theme)

      if (~idx) {
        this.chosenThemes.splice(idx, 1)
      } else {
        console.log("theme", theme)
        this.chosenThemes.push(theme)
      }
    },
  },
})
