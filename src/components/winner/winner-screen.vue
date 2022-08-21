<script setup lang="ts">
import { ref } from "vue"

import Avatar from "@/ui/atoms/avatar.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"
import avatarSVG from "@/assets/images/avatars/avatar-1.svg"

const winner = ref("Отважные котики")
const score = ref(55)
</script>
<template>
  <div class="container">
    <main
      class="space-y-8 relative py-6 w-full min-h-screen flex flex-col justify-between text-center tablet:pb-8"
    >
      <div
        class="my-auto space-y-5 flex flex-col items-center tablet:space-y-8"
      >
        <div class="space-y-4 text-center tablet:space-y-5">
          <p class="text-2xl font-semibold tablet:text-5xl">Победили</p>
          <h2 class="text-3xl font-semibold text-pink-500 tablet:text-6xl">
            {{ winner }}
          </h2>
        </div>
        <Avatar
          :src="avatarSVG"
          class="w-50 h-50 tablet:w-50 tablet:h-50"
          :alt="winner"
        />
        <div class="text-3xl font-semibold text-center tablet:text-5xl">
          <p>Баллов</p>
          <p>{{ score }}</p>
        </div>
      </div>
      <ButtonContained>Далее</ButtonContained>
    </main>
  </div>
</template>
