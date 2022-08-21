<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-12 h-12 inline-flex text-black transition-opacity group-hover:text-black/75 group-focus:text-black/75",
)

const propsClasses = ref(props.class)
const classes = computed(() =>
  mergeClasses(defaultClasses.value, propsClasses.value),
)
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
    :class="classes"
  >
    <rect width="48" height="48" rx="24" fill="white" />
    <path
      d="M18.4177 36L6 24.0539L9.40486 20.7784L18.4177 29.4489L37.5951 11L41 14.2755L18.4177 36Z"
      fill="black"
    />
  </svg>
</template>
