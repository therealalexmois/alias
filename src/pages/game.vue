<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"

import TeamPreview from "@/components/team-preview.vue"
import IconArrowBack from "@/lib/icons/arrow-back.vue"
import IconAdd from "@/lib/icons/add.vue"
import avatarSVG from "@/assets/images/avatars/avatar-1.svg"

let id = 0 as number

const newTeam = ref("")

interface ITeam {
  id: number
  title: string
}

const teams = ref<ITeam[]>([])

function addTeam() {
  teams.value.push({ id: id++, title: newTeam.value })
  newTeam.value = ""
}
</script>

<template>
  <main
    class="space-y-8 relative px-4 py-6 w-full min-h-screen flex flex-col justify-between text-center"
  >
    <div class="space-y-8">
      <div class="relative flex items-center justify-center">
        <RouterLink
          to="/"
          class="absolute left-0 top-1/2 w-8 h-8 inline-flex -translate-y-4"
          ><IconArrowBack
        /></RouterLink>
        <h1 class="text-center">Выбор команды</h1>
      </div>
      <div class="space-y-5">
        <p>Жми на текст для смены имени.</p>
        <ul class="space-y-5 list-none">
          <li v-for="team in teams" :key="team.id">
            <TeamPreview :title="team.title" />
          </li>
        </ul>
        <form @submit.prevent="addTeam" class="space-y-5">
          <div
            class="space-x-3 p-3 flex items-center bg-white rounded-[0.625rem]"
          >
            <img :src="avatarSVG" alt="Avatar" />
            <input
              autofocus
              v-model="newTeam"
              class="inline-flex grow font-sans text-base font-bold text-black placeholder:text-black/25 bg-transparent border-none transition-colors outline:none focus-within:outline-none focus-within:ring-0"
              placeholder="Ведите название команды"
            />
          </div>
          <button
            type="submit"
            class="space-x-3 w-full h-12 inline-flex items-center justify-center font-sans text-xl font-semibold leading-6 text-white bg-black rounded-[0.652rem] ring-1 ring-white"
          >
            <IconAdd />
            <span>Добавить команду</span>
          </button>
        </form>
      </div>
    </div>
    <RouterLink
      to="/start"
      class="w-full h-12 inline-flex items-center justify-center font-sans text-xl font-semibold leading-6 text-white bg-pink-500 rounded-[0.652rem]"
      >Далее</RouterLink
    >
  </main>
</template>

<style scoped></style>
