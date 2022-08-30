export interface ITheme {
  id: number
  title: string
  slug: string
  chosen: boolean
}

export interface ITeam {
  id: number
  title: string
}

export interface IWord {
  id: number
  title: string
  theme: string
}
