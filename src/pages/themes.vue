<script setup lang="ts">
import { useAppStore } from "@/stores/app"

import GoBack from "@/components/go-back.vue"
import Theme from "@/components/themes/theme.vue"

import ButtonOutlined from "@/ui/atoms/button-outlined.vue"

const { themes, chosenThemes, selectTheme } = useAppStore()
</script>
<template>
  <main
    class="space-y-8 relative pt-6 pb-24 w-full min-h-screen flex flex-col justify-between text-center tablet:pt-8 tablet:pb-26"
  >
    <div class="space-y-8">
      <div class="relative flex items-center justify-center">
        <div class="absolute left-0 top-1/2 inline-flex -translate-y-1/2">
          <GoBack />
        </div>
        <h1 class="text-center">Выберите тему</h1>
      </div>
      <div class="mx-auto space-y-5 w-160 max-w-full tablet:space-y-8">
        <p class="text-base tablet:text-xl">Листай вниз</p>
        <div class="grid grid-cols-2 gap-6 tablet:gap-12">
          <Theme
            v-for="theme in themes"
            :key="theme.id"
            :title="theme.title"
            :selected="chosenThemes.includes(theme)"
            :onClick="() => selectTheme(theme)"
          />
        </div>
      </div>
    </div>
    <div class="fixed left-0 right-0 bottom-0 px-4 py-6 bg-black tablet:px-16">
      <ButtonOutlined as="RouterLink" to="/scoreboard">Далее</ButtonOutlined>
    </div>
  </main>
</template>
