<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"

import AddTeamForm from "@/components/add-team-form.vue"
import TeamPreview from "@/components/team-preview.vue"

import ButtonContained from "@/ui/atoms/button-contained.vue"
import IconArrowBack from "@/lib/icons/arrow-back.vue"

let id = 0 as number

const newTeam = ref("")

interface ITeam {
  id: number
  title: string
}

const teams = ref<ITeam[]>([
  {
    id: id++,
    title: "Отважные котики",
  },
  {
    id: id++,
    title: "Отважные котики",
  },
  {
    id: id++,
    title: "Отважные котики",
  },
])

function addTeam() {
  if (!newTeam.value.length) return

  teams.value.push({ id: id++, title: newTeam.value })
  newTeam.value = ""
}

function removeTeam(team: ITeam) {
  teams.value = teams.value.filter((t) => t !== team)
}
</script>

<template>
  <div class="container">
    <main
      class="space-y-8 relative py-6 w-full min-h-screen flex flex-col justify-between text-center"
    >
      <div class="space-y-8">
        <div class="relative flex items-center justify-center">
          <RouterLink
            to="/"
            class="absolute left-0 top-1/2 w-8 h-8 inline-flex -translate-y-4"
          >
            <IconArrowBack />
          </RouterLink>
          <h1 class="text-center">Выбор команды</h1>
        </div>
        <div class="mx-auto space-y-5 w-160 max-w-full tablet:space-y-8">
          <p class="text-base tablet:text-xl">
            Перед началом игры дайте названия командам.
          </p>
          <ul class="space-y-5 list-none tablet:space-y-6">
            <li v-for="team in teams" :key="team.id">
              <TeamPreview :title="team.title" />
            </li>
          </ul>
          <AddTeamForm />
        </div>
      </div>
      <ButtonContained as="RouterLink" to="/start">Далее</ButtonContained>
    </main>
  </div>
</template>
