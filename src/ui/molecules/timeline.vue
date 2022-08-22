<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  watchSyncEffect,
  watchEffect,
  onUnmounted,
} from "vue"

interface Props {
  value: number
}

const props = defineProps<Props>()
</script>
<template>
  <div
    class="relative overflow-hidden w-full h-5 bg-black border-2 border-white rounded-md tablet:h-10"
  >
    <div
      class="absolute inset-0 bg-pink-500 transition-transform ease-linear duration-1000"
      :style="{ transform: `translateX(-${value}%)` }"
    />
  </div>
</template>
