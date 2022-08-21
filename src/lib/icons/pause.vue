<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-9 h-9 tablet:w-15 tablet:h-15 inline-flex text-white transition-opacity group-hover:text-white/75 group-focus:text-white/75",
)

const propsClasses = ref(props.class)
const classes = computed(() =>
  mergeClasses(defaultClasses.value, propsClasses.value),
)
</script>
<template>
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    :class="classes"
  >
    <path
      d="M23.3125 36V0H33V36H23.3125ZM3 36V0H12.6875V36H3Z"
      fill="currentColor"
    />
  </svg>
</template>
