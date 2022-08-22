<script setup lang="ts">
import IconArrowBack from "@/lib/icons/arrow-back.vue"
</script>

<template>
  <button @click="$router.back()">
    <IconArrowBack />
  </button>
</template>
