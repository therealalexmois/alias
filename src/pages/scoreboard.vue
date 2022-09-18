<script setup lang="ts">
import { useGameStore } from "@/stores/game"

import BaseTemplate from "@/ui/templates/base-template.vue"
import Header from "@/ui/organisms/header.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"
import IconStarBordered from "@/lib/icons/star-bordered.vue"
import avatar1PNG from "@/assets/images/avatars/avatar-1.svg"
// import avatar2PNG from "@/assets/images/avatars/avatar-2.png"
// import avatar3PNG from "@/assets/images/avatars/avatar-3.png"

import ScoreboardTeam from "@/components/scoreboard/scoreboard-team.vue"

const { teams, points, teamWillPlay, scores } = useGameStore()
</script>
<template>
  <BaseTemplate>
    <template #header>
      <Header>
        <template #middle>
          <h1 class="text-center">Баллы</h1>
        </template>
        <template #right>
          <IconStarBordered class="tablet:w-12 tablet:h-12" />
          <span class="text-2xl font-semibold tablet:text-3xl">
            {{ points }}
          </span>
        </template>
      </Header>
    </template>
    <ul class="space-y-4 w-full list-none tablet:space-y-6">
      <li v-for="team in teams" :key="team.id">
        <ScoreboardTeam
          :title="team.title"
          :avatar="avatar1PNG"
          :score="scores.get(team) ?? 0"
        />
      </li>
    </ul>
    <template #footer>
      <div class="space-y-2 tablet:space-y-4">
        <p class="tablet:text-xl">Далее играют</p>
        <p class="text-2xl font-semibold capitalize tablet:text-3xl">
          {{ teamWillPlay.title }}
        </p>
      </div>
      <ButtonContained as="RouterLink" to="/game">Играть</ButtonContained>
    </template>
  </BaseTemplate>
</template>
