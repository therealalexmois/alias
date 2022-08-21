<script setup lang="ts">
import { RouterLink } from "vue-router"

import ButtonContained from "@/ui/atoms/button-contained.vue"
import ButtonOutlined from "@/ui/atoms/button-outlined.vue"

import welcomeMobilePNG from "@/assets/images/welcome-mobile.png"
import welcomeTabletPNG from "@/assets/images/welcome-tablet.png"
</script>

<template>
  <div class="container">
    <main
      class="relative space-y-10 px-4 py-6 w-full min-h-screen flex flex-col justify-end tablet:space-y-14 tablet:pb-16"
    >
      <picture>
        <source media="(min-width: 768px)" :srcset="welcomeTabletPNG" />
        <img :src="welcomeMobilePNG" alt="Alias" />
      </picture>
      <div class="space-y-5 w-full flex flex-col tablet:space-y-8">
        <ButtonContained as="RouterLink" to="/start">Играть</ButtonContained>
        <ButtonOutlined as="RouterLink" to="/rules">Правила</ButtonOutlined>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
