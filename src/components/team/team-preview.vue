<script setup lang="ts">
import classNames from "classNames"

import Avatar from "@/components/avatar.vue"

import IconClose from "@/lib/icons/close.vue"

import avatarSVG from "@/assets/images/avatars/avatar-1.svg"

type TProps = {
  title: string
}

const props = defineProps<TProps>()
</script>

<template>
  <div
    class="space-x-3 p-3 flex items-center bg-white rounded-[0.625rem] tablet:p-4 tablet:space-x-4"
  >
    <Avatar
      :src="avatarSVG"
      alt="Avatar"
      class="w-15 h-15 shrink-0 overflow-hidden object-fill rounded-full tablet:w-26 tablet:h-26"
    />
    <div
      class="space-x-4 w-full flex items-center justify-between tablet:space-x-8"
    >
      <p
        :class="
          classNames(
            'inline-flex grow',
            'font-sans text-base font-bold text-black',
            'bg-transparent border-none',
            'placeholder:text-black/25 transition-colors',
            'focus-within:outline-none focus-within:ring-0',
            'tablet:text-2xl',
          )
        "
      >
        {{ title }}
      </p>
      <button>
        <IconClose class="tablet:w-12 tablet:h-12" />
      </button>
    </div>
  </div>
</template>
