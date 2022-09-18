<script setup lang="ts">
import { useAppStore } from "@/stores/app"

import GoBack from "@/components/go-back.vue"

import AddTeamForm from "@/components/teams/add-team-form.vue"
import TeamPreview from "@/components/teams/team-preview.vue"

import BaseTemplate from "@/ui/templates/base-template.vue"
import Header from "@/ui/organisms/header.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"

const { teams, removeTeam } = useAppStore()
</script>

<template>
  <BaseTemplate>
    <template #header>
      <Header>
        <template #left>
          <GoBack />
        </template>
        <template #middle>
          <h1 class="text-center">Выбор команды</h1>
        </template>
      </Header>
    </template>
    <div class="mx-auto space-y-4 w-160 max-w-full tablet:space-y-8">
      <p class="text-base tablet:text-xl">
        Перед началом игры дайте названия командам.
      </p>
      <ul class="space-y-4 list-none tablet:space-y-6">
        <li v-for="team in teams" :key="team.id">
          <TeamPreview :title="team.title" :onDelete="() => removeTeam(team)" />
        </li>
      </ul>
      <AddTeamForm />
    </div>
    <template #footer>
      <ButtonContained as="RouterLink" to="/themes">Далее</ButtonContained>
    </template>
  </BaseTemplate>
</template>
