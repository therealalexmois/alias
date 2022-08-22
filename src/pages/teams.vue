<script setup lang="ts">
import { useAppStore } from "@/stores/app"
import GoBack from "@/components/go-back.vue"
import AddTeamForm from "@/components/teams/add-team-form.vue"
import TeamPreview from "@/components/teams/team-preview.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"

const { teams, removeTeam } = useAppStore()
</script>

<template>
  <main
    class="space-y-8 relative py-6 w-full min-h-screen flex flex-col justify-between text-center tablet:py-8"
  >
    <div class="space-y-8">
      <div class="relative flex items-center justify-center">
        <div class="absolute left-0 top-1/2 inline-flex -translate-y-1/2">
          <GoBack />
        </div>
        <h1 class="text-center">Выбор команды</h1>
      </div>
      <div class="mx-auto space-y-4 w-160 max-w-full tablet:space-y-8">
        <p class="text-base tablet:text-xl">
          Перед началом игры дайте названия командам.
        </p>
        <ul class="space-y-4 list-none tablet:space-y-6">
          <li v-for="team in teams" :key="team.id">
            <TeamPreview
              :title="team.title"
              :onDelete="() => removeTeam(team)"
            />
          </li>
        </ul>
        <AddTeamForm />
      </div>
    </div>
    <ButtonContained as="RouterLink" to="/themes">Далее</ButtonContained>
  </main>
</template>
