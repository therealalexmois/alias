<script setup lang="ts">
import { useAppStore } from "@/stores/app"

import GoBack from "@/components/go-back.vue"
import ThemesElement from "@/components/themes/themes-element.vue"

import BaseTemplate from "@/ui/templates/base-template.vue"
import Header from "@/ui/organisms/header.vue"
import ButtonOutlined from "@/ui/atoms/button-outlined.vue"

const { themes, chosenThemes, selectTheme } = useAppStore()
</script>
<template>
  <BaseTemplate>
    <template #header>
      <Header>
        <template #left>
          <GoBack />
        </template>
        <template #middle>
          <h1 class="text-center">Выберите тему</h1>
        </template>
      </Header>
    </template>
    <div class="mx-auto space-y-5 w-160 max-w-full tablet:space-y-8">
      <p class="text-base tablet:text-xl">Листай вниз</p>
      <div class="grid grid-cols-2 gap-6 tablet:gap-12">
        <ThemesElement
          v-for="theme in themes"
          :key="theme.id"
          :title="theme.title"
          :selected="chosenThemes.includes(theme)"
          :onClick="() => selectTheme(theme)"
        />
      </div>
    </div>
    <template #footer>
      <ButtonOutlined as="RouterLink" to="/start">Далее</ButtonOutlined>
    </template>
  </BaseTemplate>
</template>
