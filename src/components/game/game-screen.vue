<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue"
import classNames from "classnames"

import ButtonContained from "@/ui/atoms/button-contained.vue"
import IconReject from "@/lib/icons/reject.vue"
import IconConfirm from "@/lib/icons/confirm.vue"
import IconPause from "@/lib/icons/pause.vue"
import IconPlay from "@/lib/icons/play.vue"
import { Timer } from "@/lib/timer"

import GameTemplate from "./game-template.vue"
import Timeline from "./timeline.vue"

const score = ref(0)

const timerId = ref<number | null>(null)
const humanReadableTime = ref<string | null>("01:00")
const remainderTime = ref(60)
const isPaused = ref(false)

function handleTimerUpdate(
  __humanReadableTime: string,
  __remainderTime: number,
) {
  humanReadableTime.value = __humanReadableTime
  remainderTime.value = __remainderTime
}

function handleTimerEnd() {
  console.log("Round ended")
}

function handleTimerPause(paused: boolean) {
  isPaused.value = paused
}

const timer = ref(
  Timer({
    onUpdate: handleTimerUpdate,
    onEnd: handleTimerEnd,
    onPause: handleTimerPause,
  }),
)

function handlePlayPauseClick() {
  timer.value.pause()
}

const progress = ref(0)

function updateProgress(time: number) {
  progress.value = 100 - (time / 60) * 100
}

watch(remainderTime, updateProgress)

onMounted(() => {
  timerId.value = timer.value.start()
})

onUnmounted(() => {
  timer.value.clear(timerId.value)
})
</script>
<template>
  <div class="container">
    <main
      class="space-y-8 relative mx-auto py-6 w-120 max-w-full min-h-screen flex flex-col justify-between text-center tablet:py-32"
    >
      <GameTemplate>
        <template v-slot:header>
          <div class="flex items-center justify-between">
            <button @click="handlePlayPauseClick">
              <IconPlay v-if="isPaused" />
              <IconPause v-else />
            </button>
            <span class="text-2xl font-semibold tablet:text-4xl">
              {{ humanReadableTime }}
            </span>
            <span class="text-5xl font-bold tablet:text-7xl">{{ score }}</span>
          </div>
          <Timeline :value="progress" />
        </template>
        <div
          :class="
            classNames(
              'relative h-60 w-full flex items-center justify-center bg-white rounded-[20px] tablet:h-64',
              {
                'blur-lg': isPaused,
              },
            )
          "
        >
          <span class="text-4xl font-semibold text-black">Слон</span>
          <small
            class="absolute left-1/2 bottom-4 -translate-x-1/2 text-xl font-normal text-black"
          >
            Природа
          </small>
        </div>
        <template v-slot:actions>
          <div class="space-x-6 flex tablet:space-x-10">
            <ButtonContained
              :class="'h-20 bg-white tablet:h-26'"
              :disabled="isPaused"
            >
              <IconReject />
            </ButtonContained>
            <ButtonContained :class="'h-20 tablet:h-26'" :disabled="isPaused">
              <IconConfirm />
            </ButtonContained>
          </div>
        </template>
      </GameTemplate>
    </main>
  </div>
</template>
