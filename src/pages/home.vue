<script setup lang="ts">
import { RouterLink } from "vue-router"
import welcomePNG from "@/assets/welcome.png"
</script>

<template>
  <main class="relative space-y-10 px-4 py-6 w-full min-h-screen flex flex-col">
    <img :src="welcomePNG" alt="Alias" />
    <div class="space-y-5 w-full flex flex-col">
      <RouterLink
        to="/start"
        class="w-full h-12 inline-flex items-center justify-center font-sans text-xl font-semibold leading-6 text-white bg-pink-500 rounded-[0.652rem]"
        >Играть</RouterLink
      >
      <RouterLink
        to="/rules"
        class="w-full h-12 inline-flex items-center justify-center font-sans text-xl font-semibold leading-6 text-white bg-black rounded-[0.652rem] ring-1 ring-white"
      >
        Правила
      </RouterLink>
    </div>
  </main>
</template>

<style scoped></style>
