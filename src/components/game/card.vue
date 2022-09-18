<script setup lang="ts">
import clsx from "clsx"

type TProps = {
  isPaused: boolean
  title: string
  theme: string
}

const props = defineProps<TProps>()
</script>

<template>
  <div
    :class="
      clsx(
        'relative h-60 w-full max-w-full flex items-center justify-center bg-white rounded-[20px] tablet:h-64',
        {
          'blur-lg': isPaused,
        },
      )
    "
  >
    <span class="text-4xl font-semibold text-black">{{ title }}</span>
    <small
      class="absolute left-1/2 bottom-4 -translate-x-1/2 text-xl font-normal text-black"
    >
      {{ theme }}
    </small>
  </div>
</template>
