<script setup lang="ts">
import { ref, computed } from "vue"

import Theme from "./theme.vue"

import ButtonOutlined from "@/ui/atoms/button-outlined.vue"
import IconArrowBack from "@/lib/icons/arrow-back.vue"

let id = 0 as number

interface ITheme {
  id: number
  title: string
  slug: string
}

const themes = ref<ITheme[]>([
  {
    id: id++,
    title: "Основа",
    slug: "common",
  },
  {
    id: id++,
    title: "Еда",
    slug: "food",
  },
  {
    id: id++,
    title: "Лето",
    slug: "summer",
  },
  {
    id: id++,
    title: "Космос",
    slug: "space",
  },
  {
    id: id++,
    title: "Профессии",
    slug: "professions",
  },
  {
    id: id++,
    title: "18+",
    slug: "adult",
  },
  {
    id: id++,
    title: "Кино",
    slug: "movies",
  },
  {
    id: id++,
    title: "Природа",
    slug: "nature",
  },
  {
    id: id++,
    title: "Мода",
    slug: "fashion",
  },
  {
    id: id++,
    title: "Спорт",
    slug: "sports",
  },
])

const defaultSelected = computed(() =>
  themes.value.find((theme) => theme.slug === "common"),
)
const chosen = ref([defaultSelected.value?.id])

function handleSelect(id: number) {
  return function addOrRemoveSelection() {
    const isExist = chosen.value.includes(id)

    if (isExist) {
      chosen.value = chosen.value.filter((choice) => choice !== id)
    } else {
      chosen.value.push(id)
    }
  }
}
</script>
<template>
  <div class="container">
    <main
      class="space-y-8 relative pt-6 pb-24 w-full min-h-screen flex flex-col justify-between text-center tablet:pt-8 tablet:pb-26"
    >
      <div class="space-y-8">
        <div class="relative flex items-center justify-center">
          <RouterLink
            to="/"
            class="absolute left-0 top-1/2 inline-flex -translate-y-1/2"
          >
            <IconArrowBack />
          </RouterLink>
          <h1 class="text-center">Выберите тему</h1>
        </div>
        <div class="mx-auto space-y-5 w-160 max-w-full tablet:space-y-8">
          <p class="text-base tablet:text-xl">Листай вниз</p>
          <div class="grid grid-cols-2 gap-6 tablet:gap-12">
            <Theme
              v-for="theme in themes"
              :key="theme.id"
              :title="theme.title"
              :selected="chosen.includes(theme.id)"
              :onClick="handleSelect(theme.id)"
            />
          </div>
        </div>
      </div>
      <div
        class="fixed left-0 right-0 bottom-0 px-4 py-6 bg-black tablet:px-16"
      >
        <ButtonOutlined>Далее</ButtonOutlined>
      </div>
    </main>
  </div>
</template>
