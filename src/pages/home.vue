<script setup lang="ts">
import BaseTemplate from "@/ui/templates/base-template.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"
import ButtonOutlined from "@/ui/atoms/button-outlined.vue"

import welcomeMobilePNG from "@/assets/images/welcome-mobile.png"
import welcomeTabletPNG from "@/assets/images/welcome-tablet.png"
</script>

<template>
  <BaseTemplate>
    <picture>
      <source media="(min-width: 768px)" :srcset="welcomeTabletPNG" />
      <img :src="welcomeMobilePNG" alt="Alias" />
    </picture>
    <template #footer>
      <ButtonContained as="RouterLink" to="/intro">Играть</ButtonContained>
      <ButtonOutlined as="RouterLink" to="/rules">Правила</ButtonOutlined>
    </template>
  </BaseTemplate>
</template>
