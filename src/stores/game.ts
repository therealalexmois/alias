import { defineStore } from "pinia"

import { words } from "@/db/words.json"
import { themes } from "@/db/themes.json"

import type { ITeam, ITheme, IWord } from "@/types"

interface IGameSettings {
  points?: number
  teams: ITeam[]
  themes: ITheme[]
  duration?: number
  words?: IWord[]
}

const DEFAULT_DURATION = 5
const DEFAULT_POINTS = 3

const DEFAULT_WORDS = words.map((word) => ({
  id: word.id,
  title: word.title,
  theme: themes.find((theme) => theme.id === word.theme_id)?.title ?? "",
}))

export const useGameStore = defineStore({
  id: "game",
  state: () => ({
    teams: [] as ITeam[],
    themes: [] as ITheme[],
    duration: 0,
    points: 0,
    scores: new Map<ITeam, number>([]),
    nextToPlay: 0,
    words: [] as IWord[],
  }),
  getters: {
    findOneTeam(state) {
      return function find(teamId: number) {
        return state.teams.find((team) => team.id === teamId)
      }
    },
    teamsCount(state) {
      return state.teams.length
    },
    playingTeam(state) {
      return state.teams[state.nextToPlay]
    },
    teamWillPlay(state) {
      return state.teams.find((_team, idx) => idx === state.nextToPlay) as ITeam
    },
    playingTeamScore(state) {
      const playingTeam = state.teams[state.nextToPlay]
      const points = state.scores.get(playingTeam)

      if (points) return points

      return 0
    },
    wordsCount(state) {
      return state.words.length
    },
    winner(state) {
      const winners = [] as ITeam[]

      for (const [team, score] of state.scores) {
        if (score >= state.points) {
          winners.push(team)
        }
      }

      if (winners.length !== 1) {
        return null
      }

      return {
        ...winners[0],
        points: state.scores.get(winners[0]),
      }
    },
  },
  actions: {
    create(settings: IGameSettings) {
      const {
        teams,
        themes,
        duration = DEFAULT_DURATION,
        points = DEFAULT_POINTS,
        words = DEFAULT_WORDS,
      } = settings

      this.teams = teams
      this.themes = themes
      this.duration = duration
      this.points = points
      this.words = words

      for (const team of teams) {
        this.scores.set(team, 0)
      }
    },
    changeNextToPlay() {
      if (this.teamsCount === this.nextToPlay) {
        this.nextToPlay = 0
      } else {
        this.nextToPlay++
      }
    },
    increasePlayingTeamPointsByOne() {
      const points = this.scores.get(this.playingTeam)
      if (points) {
        this.scores.set(this.playingTeam, points + 1)
      } else {
        this.scores.set(this.playingTeam, 1)
      }
    },
    decreasePlayingTeamPointsByOne() {
      const points = this.scores.get(this.playingTeam)
      if (points) {
        this.scores.set(this.playingTeam, points - 1)
      } else {
        this.scores.set(this.playingTeam, -1)
      }
    },
  },
})
