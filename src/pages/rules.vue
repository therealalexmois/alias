<script setup lang="ts">
import { RouterLink } from "vue-router"
import IconArrowBack from "@/lib/icons/arrow-back.vue"
</script>

<template>
  <main class="relative px-4 py-6 w-full min-h-screen text-center">
    <div class="relative flex items-center justify-center">
      <RouterLink
        to="/"
        class="absolute left-0 top-1/2 w-8 h-8 inline-flex -translate-y-4"
        ><IconArrowBack
      /></RouterLink>
      <h1 class="text-center">Правила</h1>
    </div>
    <p>Перед игрой необходимо разбиться на команды.</p>
    <p>
      Задача одного из игроков комады - обьъяснить появляющиеся на экране слова.
      Задача остальных игроков - отгадать как можно больше слов в течении
      заданного времени.
    </p>
    <p>
      Если слово будет отгадано, следует нажать на розовую кнопку, а если нет -
      нажать на белую. По истечении времени у команды есть возможность отгадать
      последнее слово.
    </p>
  </main>
</template>

<style scoped></style>
