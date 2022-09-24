<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue"
import { useRouter } from "vue-router"

import { useGameStore } from "@/stores/game"

import Timer from "@/components/game/timer.vue"
import Card from "@/components/game/card.vue"

import BaseTemplate from "@/ui/templates/base-template.vue"
import Header from "@/ui/organisms/header.vue"
import ButtonContained from "@/ui/atoms/button-contained.vue"
import IconReject from "@/lib/icons/reject.vue"
import IconConfirm from "@/lib/icons/confirm.vue"
import IconPause from "@/lib/icons/pause.vue"
import IconPlay from "@/lib/icons/play.vue"
import { timer } from "@/lib/timer"
import Timeline from "@/ui/molecules/timeline.vue"

const router = useRouter()
const gameStore = useGameStore()

const timerId = ref<number | null>(null)
// TODO: нормализовать humanReadableTime с помощью date-fns
const humanReadableTime = ref<string>("00:05")
const remainderTime = ref(10)
const isPaused = ref(false)
const isTimeEnded = ref(false)
const ordinalWordNumber = ref(0)

function handleTimerUpdate(
  __humanReadableTime: string,
  __remainderTime: number,
) {
  humanReadableTime.value = __humanReadableTime
  remainderTime.value = __remainderTime
}

function handleTimerEnd() {
  isTimeEnded.value = true
}

function handleTimerPause(paused: boolean) {
  isPaused.value = paused
}

const round_timer = ref(
  timer({
    duration: gameStore.duration,
    onUpdate: handleTimerUpdate,
    onEnd: handleTimerEnd,
    onPause: handleTimerPause,
  }),
)

function handlePlayPauseClick() {
  round_timer.value.pause()
}

const progress = ref(0)

function updateProgress(time: number) {
  progress.value = 100 - (time / gameStore.duration) * 100
}

watch(remainderTime, updateProgress)

onMounted(() => {
  timerId.value = round_timer.value.start()
})

onUnmounted(() => {
  round_timer.value.clear(timerId.value)
})

function increaseOrdinalWordNumberByOne() {
  if (ordinalWordNumber.value + 1 === gameStore.wordsCount) {
    ordinalWordNumber.value = 0
  } else {
    ordinalWordNumber.value = ordinalWordNumber.value + 1
  }
}

function handleAccept() {
  gameStore.increasePlayingTeamPointsByOne()
  if (isTimeEnded.value) {
    if (gameStore.winner) {
      router.push("/winner")
    } else {
      gameStore.changeNextToPlay()
      router.push("/scoreboard")
    }
  } else {
    increaseOrdinalWordNumberByOne()
  }
}

function handleReject() {
  if (isTimeEnded.value) {
    if (gameStore.winner) {
      router.push("/winner")
    } else {
      gameStore.changeNextToPlay()
      router.push("/scoreboard")
    }
  } else {
    increaseOrdinalWordNumberByOne()
  }
}

const displayWord = computed(() =>
  gameStore.words.find((_word, idx) => idx === ordinalWordNumber.value),
)
</script>

<template>
  <BaseTemplate>
    <template #header>
      <div class="space-y-8 tablet:space-y-10">
        <Header>
          <template #left>
            <button @click="handlePlayPauseClick">
              <IconPlay v-if="isPaused" />
              <IconPause v-else />
            </button>
          </template>
          <template #middle>
            <Timer :value="humanReadableTime" />
          </template>
          <template #right>
            <div class="flex items-center justify-between">
              <span class="text-5xl font-bold tablet:text-7xl">
                {{ gameStore.playingTeamScore }}
              </span>
            </div>
          </template>
        </Header>
        <div class="px-4">
          <Timeline :value="progress" />
        </div>
      </div>
    </template>
    <div class="my-auto w-full">
      <Card
        v-if="displayWord"
        :key="displayWord.id"
        :isPaused="isPaused"
        :title="displayWord.title"
        :theme="displayWord.theme"
      />
    </div>
    <template #footer>
      <div class="space-x-4 flex tablet:space-x-8">
        <ButtonContained
          type="button"
          @click="handleReject"
          :class="'h-20 bg-white tablet:h-26'"
          :disabled="isPaused"
        >
          <IconReject />
        </ButtonContained>
        <ButtonContained
          type="button"
          @click="handleAccept"
          :class="'h-20 tablet:h-26'"
          :disabled="isPaused"
        >
          <IconConfirm />
        </ButtonContained>
      </div>
    </template>
  </BaseTemplate>
</template>
