<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-8 h-8 tablet:w-12 tablet:h-12 inline-flex text-black transition-opacity group-hover:text-black/75 group-focus:text-black/75",
)

const propsClasses = ref(props.class)
const classes = computed(() =>
  mergeClasses(defaultClasses.value, propsClasses.value),
)
</script>
<template>
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    :class="classes"
  >
    <path
      d="M22.0351 29L8 16L22.0351 3L24 4.8525L11.9649 16L24 27.1475L22.0351 29Z"
      fill="white"
    />
  </svg>
</template>
