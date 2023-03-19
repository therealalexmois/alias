<script setup lang="ts">
import { ref } from "vue"
import clsx from "clsx"

import { useAppStore } from "@/stores/app"

import Avatar from "@/ui/atoms/avatar.vue"
import ButtonOutlined from "@/ui/atoms/button-outlined.vue"
import IconAdd from "@/lib/icons/add.vue"
import avatarSVG from "@/assets/images/avatars/avatar-1.svg"

const { addTeam } = useAppStore()

const title = ref("")

function submit() {
  addTeam(title.value)
  title.value = ""
}
</script>
<template>
  <form @submit.prevent="submit" class="space-y-5 tablet:space-y-6">
    <div
      class="space-x-3 p-3 flex items-center bg-white rounded-[0.625rem] tablet:p-4 tablet:space-x-4"
    >
      <Avatar :src="avatarSVG" :alt="username" />
      <input
        autofocus
        v-model="title"
        :class="
          clsx(
            'inline-flex grow',
            'font-sans text-base font-bold text-black',
            'bg-transparent border-none',
            'placeholder:text-black/25 transition-colors',
            'focus-within:outline-none focus-within:ring-0',
            'tablet:text-2xl',
          )
        "
        placeholder="Ведите название команды"
      />
    </div>
    <ButtonOutlined
      type="submit"
      class="space-x-3 w-full h-12 inline-flex items-center justify-center font-sans text-xl font-semibold leading-6 text-white bg-black rounded-[0.652rem] ring-1 ring-white"
    >
      <IconAdd />
      <span>Добавить команду</span>
    </ButtonOutlined>
  </form>
</template>
