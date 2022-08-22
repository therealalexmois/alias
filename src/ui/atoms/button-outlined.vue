<script setup lang="ts">
import { ref, computed } from "vue"
import clsx from "clsx"

import { mergeClasses } from "@/lib/css"

interface Props {
  as?: string
  to?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})

const defaultClasses = ref(
  clsx(
    "w-full h-12 inline-flex items-center justify-center",
    "font-sans text-xl font-semibold leading-6 text-white",
    "bg-black rounded-[0.652rem] ring-1 ring-white",
    "tablet:h-14 tablet:text-2xl",
  ),
)

const propsClasses = ref(props.class)
const classes = computed(() =>
  mergeClasses(defaultClasses.value, propsClasses.value),
)
</script>
<template>
  <component :is="as" :to="to" :class="classes">
    <slot />
  </component>
</template>
