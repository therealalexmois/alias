<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-6 h-6 inline-flex text-black transition-opacity group-hover:text-black/75 group-focus:text-black/75",
)

const propsClasses = ref(props.class)
const classes = computed(() =>
  mergeClasses(defaultClasses.value, propsClasses.value),
)
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    :class="classes"
  >
    <path
      d="M5.22341 20.4705L3.5293 18.7764L10.3058 11.9999L3.5293 5.22341L5.22341 3.5293L11.9999 10.3058L18.7764 3.5293L20.4705 5.22341L13.694 11.9999L20.4705 18.7764L18.7764 20.4705L11.9999 13.694L5.22341 20.4705Z"
      fill="currentColor"
    />
  </svg>
</template>
