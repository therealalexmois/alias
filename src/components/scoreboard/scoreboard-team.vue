<script setup lang="ts">
import clsx from "clsx"

import Avatar from "@/ui/atoms/avatar.vue"

type TProps = {
  title: string
  avatar: string
  score: number
}

const props = defineProps<TProps>()
</script>

<template>
  <div
    class="space-x-3 p-3 flex items-center bg-white rounded-[0.625rem] tablet:p-4 tablet:space-x-4"
  >
    <Avatar
      :src="avatar"
      :alt="title"
      class="w-15 h-15 shrink-0 overflow-hidden object-fill rounded-full tablet:w-26 tablet:h-26"
    />
    <div
      class="space-x-4 w-full flex items-center justify-between tablet:space-x-8"
    >
      <p
        :class="
          clsx(
            'inline-flex grow',
            'font-sans text-base font-bold text-black capitalize',
            'bg-transparent border-none',
            'placeholder:text-black/25 transition-colors',
            'focus-within:outline-none focus-within:ring-0',
            'tablet:text-2xl',
          )
        "
      >
        {{ title }}
      </p>
      <p class="font-bold text-2xl text-pink-500 tablet:text-3xl">
        {{ score }}
      </p>
    </div>
  </div>
</template>
