<script setup lang="ts">
import { ref, computed } from "vue"
import { mergeClasses } from "@/lib/css"

interface Props {
  class?: string
}

const props = defineProps<Props>()
const defaultClasses = ref(
  "w-15 h-15 overflow-hidden object-fill rounded-full tablet:w-25 tablet:h-25",
)

const propsClasses = ref(props.class)
const classes = computed(() =>
  mergeClasses(defaultClasses.value, propsClasses.value),
)
</script>
<template>
  <img :class="classes" />
</template>
