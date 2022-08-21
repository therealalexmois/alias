<script setup lang="ts">
import { ref } from "vue"

import ButtonContained from "@/ui/atoms/button-contained.vue"
import IconArrowBack from "@/lib/icons/arrow-back.vue"
import IconStarBordered from "@/lib/icons/star-bordered.vue"
import avatar1PNG from "@/assets/images/avatars/avatar-1.svg"
import avatar2PNG from "@/assets/images/avatars/avatar-2.png"
import avatar3PNG from "@/assets/images/avatars/avatar-3.png"

import ScoreboardTeam from "./scoreboard-team.vue"

let id = 0 as number

interface ITeam {
  id: number
  title: string
  score: number
  avatar: string
}

const teams = ref<ITeam[]>([
  {
    id: id++,
    title: "Отважные котики",
    score: 0,
    avatar: avatar1PNG,
  },
  {
    id: id++,
    title: "Трудяги",
    score: 0,
    avatar: avatar2PNG,
  },
  {
    id: id++,
    title: "Убийцы",
    score: 0,
    avatar: avatar3PNG,
  },
])

const requiredPoints = ref(50)
</script>
<template>
  <div class="container">
    <main
      class="space-y-8 relative pt-6 pb-24 w-full min-h-screen flex flex-col justify-between text-center tablet:pt-8 tablet:pb-26"
    >
      <div class="space-y-8">
        <div class="relative flex items-center justify-center">
          <RouterLink
            to="/"
            class="absolute left-0 top-1/2 inline-flex -translate-y-1/2"
          >
            <IconArrowBack />
          </RouterLink>
          <h1 class="text-center">Баллы</h1>
          <div
            class="absolute right-0 top-1/2 -translate-y-1/2 space-x-1 inline-flex items-center"
          >
            <IconStarBordered class="tablet:w-12 tablet:h-12" />
            <span class="text-2xl font-semibold tablet:text-3xl">{{
              requiredPoints
            }}</span>
          </div>
        </div>
        <div class="mx-auto w-160 max-w-full">
          <ul class="space-y-4 list-none tablet:space-y-6">
            <li v-for="team in teams" :key="team.id">
              <ScoreboardTeam
                :title="team.title"
                :avatar="team.avatar"
                :score="team.score"
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        class="fixed left-0 right-0 bottom-0 space-y-5 px-4 py-6 bg-black tablet:px-16 tablet:space-y-10"
      >
        <div class="space-y-2 tablet:space-y-4">
          <p class="tablet:text-xl">Далее играют</p>
          <p class="text-2xl font-semibold tablet:text-3xl">Отважные котики</p>
        </div>
        <ButtonContained>Играть</ButtonContained>
      </div>
    </main>
  </div>
</template>
