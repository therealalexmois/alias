<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-8 h-8 inline-flex text-white transition-opacity group-hover:text-white/75 group-focus:text-white/75",
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
      d="M11.5475 23.7025L16 20.3225L20.4525 23.7025L18.665 18.08L22.76 15.415H17.8525L16 9.7925L14.1475 15.415H9.24L13.335 18.08L11.5475 23.7025ZM7.9725 29L10.995 19.12L3 13.4H12.88L16 3L19.12 13.4H29L21.005 19.12L24.0275 29L16 22.89L7.9725 29Z"
      fill="currentColor"
    />
  </svg>
</template>
