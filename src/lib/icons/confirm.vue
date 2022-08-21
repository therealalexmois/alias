<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-17 h-17 tablet:w-24 tablet:h-24 inline-flex text-white transition-opacity group-hover:text-white/75 group-focus:text-white/75",
)

const propsClasses = ref(props.class)
const classes = computed(() =>
  mergeClasses(defaultClasses.value, propsClasses.value),
)
</script>
<template>
  <svg
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    :class="classes"
  >
    <path
      d="M26.03 51L9 34.7534L13.6695 30.2987L26.03 42.0906L52.3305 17L57 21.4547L26.03 51Z"
      fill="currentColor"
    />
  </svg>
</template>
