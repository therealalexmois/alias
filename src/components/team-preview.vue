<script setup lang="ts">
import avatarSVG from "@/assets/images/avatars/avatar-1.svg"

type TProps = {
  title: string
}

const props = defineProps<TProps>()
</script>

<template>
  <div class="space-x-3 p-3 flex items-center bg-white rounded-[0.625rem]">
    <img :src="avatarSVG" alt="Avatar" />
    <p
      class="inline-flex grow font-sans text-base font-bold text-black placeholder:text-black/25 bg-transparent border-none transition-colors outline:none focus-within:outline-none focus-within:ring-0"
    >
      {{ title }}
    </p>
  </div>
</template>
