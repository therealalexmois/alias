<script setup lang="ts">
import classNames from "classNames"

import IconDone from "@/lib/icons/done.vue"

type TProps = {
  title: string
  selected: boolean
  onClick: () => void
}

const props = defineProps<TProps>()
</script>
<template>
  <div>
    <div
      @click="onClick"
      :class="
        classNames(
          'relative',
          'w-40 h-40 flex items-center justify-center',
          'text-2xl font-semibold leading-none',
          'bg-pink-500 rounded-full',
          'tablet:w-74 tablet:h-74 tablet:text-3xl',
        )
      "
    >
      {{ title }}
      <IconDone
        v-if="selected"
        class="absolute top-0 right-0 tablet:w-20 tablet:h-20"
      />
    </div>
  </div>
</template>
