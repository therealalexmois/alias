<script setup lang="ts">
import BaseTemplate from "@/ui/templates/base-template.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"
import ButtonOutlined from "@/ui/atoms/button-outlined.vue"

import catMobileSVG from "@/assets/images/hero/cat-mobile.png"
import catTabletSVG from "@/assets/images/hero/cat-tablet.png"
</script>

<template>
  <BaseTemplate>
    <div class="my-auto flex">
      <div class="shrink-0 w-[172px] h-[300px] tablet:w-80 tablet:h-[562px]">
        <picture>
          <source media="(min-width: 768px)" :srcset="catTabletSVG" />
          <img :src="catMobileSVG" alt="Cat" />
        </picture>
      </div>
      <div
        class="-ml-4 mt-4 text-base leading-normal font-semibold text-pink-500 tablet:mt-36 tablet:ml-0 tablet:text-2xl"
      >
        <p>Вечеринка?</p>
        <p>Самое время поиграть в&nbsp;Alias!</p>
      </div>
    </div>
    <template #footer>
      <div class="space-y-1 tablet:space-y-3">
        <ButtonOutlined as="RouterLink" to="/rules">
          Как играть?
        </ButtonOutlined>
        <p
          class="text-sm font-semibold text-center tablet:text-lg tablet:font-normal"
        >
          Ознакомься с&nbsp;правила игры перед началом
        </p>
      </div>
      <ButtonContained as="RouterLink" to="/teams">Далее</ButtonContained>
    </template>
  </BaseTemplate>
</template>
