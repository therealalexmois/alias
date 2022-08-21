<script setup lang="ts">
import classNames from "classNames"

interface Props {
  as?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})
</script>
<template>
  <component
    :is="as"
    :to="to"
    :class="
      classNames(
        'w-full h-12 inline-flex items-center justify-center',
        'font-sans text-xl font-semibold leading-6 text-white',
        'bg-black rounded-[0.652rem] ring-1 ring-white',
        'tablet:h-14 tablet:text-2xl',
      )
    "
  >
    <slot />
  </component>
</template>
