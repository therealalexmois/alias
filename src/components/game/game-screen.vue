<script setup lang="ts">
import { ref } from "vue"

import ButtonContained from "@/ui/atoms/button-contained.vue"
import IconReject from "@/lib/icons/reject.vue"
import IconConfirm from "@/lib/icons/confirm.vue"
import IconPause from "@/lib/icons/pause.vue"
import IconPlay from "@/lib/icons/play.vue"

const timer = ref(120 * 1000)
const score = ref(0)
</script>
<template>
  <div class="container">
    <main
      class="space-y-8 relative mx-auto py-6 w-120 max-w-full min-h-screen flex flex-col justify-between text-center tablet:py-32"
    >
      <div class="space-y-8 tablet:space-y-10">
        <div class="flex items-center justify-between">
          <button>
            <IconPause />
          </button>
          <span class="text-2xl font-semibold tablet:text-4xl">
            {{ timer }}
          </span>
          <span class="text-5xl font-bold tablet:text-7xl">{{ score }}</span>
        </div>
        <div>
          <div
            class="relative overflow-hidden w-full h-5 bg-black border-2 border-white rounded-md tablet:h-10"
          >
            <div
              class="absolute inset-0 bg-pink-500 -translate-x-1/2 transition-transform"
            />
          </div>
        </div>
      </div>
      <div class="grow flex items-center justify-center">
        <div
          class="relative h-60 w-full flex items-center justify-center bg-white rounded-[20px] tablet:h-64"
        >
          <span class="text-4xl font-semibold text-black">Слон</span>
          <small
            class="absolute left-1/2 bottom-4 -translate-x-1/2 text-xl font-normal text-black"
          >
            Природа
          </small>
        </div>
      </div>
      <div class="space-x-6 flex tablet:space-x-10">
        <ButtonContained :class="'h-20 bg-white tablet:h-26'">
          <IconReject />
        </ButtonContained>
        <ButtonContained :class="'h-20 tablet:h-26'">
          <IconConfirm />
        </ButtonContained>
      </div>
    </main>
  </div>
</template>
