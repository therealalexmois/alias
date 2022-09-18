<script setup lang="ts">
import { useGameStore } from "@/stores/game"

import BaseTemplate from "@/ui/templates/base-template.vue"

import Avatar from "@/ui/atoms/avatar.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"
import avatarSVG from "@/assets/images/avatars/avatar-1.svg"

const { winner } = useGameStore()
</script>
<template>
  <BaseTemplate>
    <div
      class="my-auto w-full space-y-5 flex flex-col items-center tablet:space-y-8"
    >
      <div class="space-y-4 text-center tablet:space-y-5">
        <p class="text-2xl font-semibold tablet:text-5xl">Победили</p>
        <h2
          class="text-3xl font-semibold text-pink-500 capitalize tablet:text-6xl"
        >
          {{ winner?.title }}
        </h2>
      </div>
      <Avatar
        :src="avatarSVG"
        class="w-50 h-50 tablet:w-50 tablet:h-50"
        :alt="winner?.title"
      />
      <div class="text-3xl font-semibold text-center tablet:text-5xl">
        <p>Баллов</p>
        <p>{{ winner?.points }}</p>
      </div>
    </div>
    <template #footer>
      <ButtonContained as="RouterLink" to="/home">
        Сыграть еще раз
      </ButtonContained>
    </template>
  </BaseTemplate>
</template>
