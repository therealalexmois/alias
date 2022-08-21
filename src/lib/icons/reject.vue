<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-17 h-17 tablet:w-24 tablet:h-24 inline-flex text-black transition-opacity group-hover:text-black/75 group-focus:text-black/75",
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
      d="M17.9231 53L15 50.0769L31.0769 34L15 17.9231L17.9231 15L34 31.0769L50.0769 15L53 17.9231L36.9231 34L53 50.0769L50.0769 53L34 36.9231L17.9231 53Z"
      fill="currentColor"
    />
  </svg>
</template>
