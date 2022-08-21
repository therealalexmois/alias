<script setup lang="ts">
import { RouterLink } from "vue-router"

import IconArrowBack from "@/lib/icons/arrow-back.vue"
import catsTopPNG from "@/assets/images/rules/cats-top.png"
import catsMiddlePNG from "@/assets/images/rules/cats-middle.png"
import cardsMobileSVG from "@/assets/images/rules/cards-mobile.svg"
import cardsTabletSVG from "@/assets/images/rules/cards-tablet.svg"
</script>

<template>
  <div class="container">
    <main
      class="relative py-6 space-y-6 w-full min-h-screen text-center tablet:space-y-10"
    >
      <div class="relative flex items-center justify-center">
        <RouterLink
          to="/"
          class="absolute left-0 top-1/2 w-8 h-8 inline-flex -translate-y-4"
        >
          <IconArrowBack />
        </RouterLink>
        <h1 class="text-center">Правила</h1>
      </div>
      <article
        class="mx-auto space-y-6 w-full max-w-lg text-center tablet:space-y-8"
      >
        <div class="space-y-3 flex flex-col items-center tablet:space-y-4">
          <img :src="catsTopPNG" alt="Cats" />
          <p class="text-base tablet:text-xl">
            Перед игрой необходимо разбиться на&nbsp;команды.
          </p>
        </div>
        <div class="space-y-3 flex flex-col items-center tablet:space-y-4">
          <img :src="catsMiddlePNG" alt="Cats" />
          <p class="text-base tablet:text-xl">
            Задача одного из&nbsp;игроков комады&nbsp;&mdash; обьъяснить
            появляющиеся на&nbsp;экране слова. Задача остальных
            игроков&nbsp;&mdash; отгадать как можно больше слов в течении
            заданного времени.
          </p>
        </div>
        <div class="space-y-3 flex flex-col items-center tablet:space-y-4">
          <picture class="-mx-16">
            <source media="(min-width: 768px)" :srcset="cardsTabletSVG" />
            <img :src="cardsMobileSVG" alt="Cards" />
          </picture>
          <p class="text-base tablet:text-xl">
            Если слово будет отгадано, следует нажать на&nbsp;розовую кнопку,
            а&nbsp;если нет&nbsp;&mdash; нажать на&nbsp;белую. По&nbsp;истечении
            времени у&nbsp;команды есть возможность отгадать последнее слово.
          </p>
        </div>
      </article>
    </main>
  </div>
</template>

<style scoped></style>
