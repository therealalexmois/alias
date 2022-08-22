<script setup lang="ts">
import GoBack from "@/components/go-back.vue"
</script>

<template>
  <main
    class="space-y-8 relative pt-6 pb-24 w-full min-h-screen flex flex-col justify-between text-center tablet:pt-8 tablet:pb-26"
  >
    <div class="space-y-8">
      <div class="relative flex items-center justify-center">
        <div class="absolute left-0 top-1/2 inline-flex -translate-y-1/2">
          <GoBack />
        </div>
        <h1>
          <slot name="title" />
        </h1>
      </div>
      <div class="mx-auto space-y-5 w-160 max-w-full tablet:space-y-8">
        <slot />
      </div>
    </div>
    <div class="fixed left-0 right-0 bottom-0 px-4 py-6 bg-black tablet:px-16">
      <div class="mx-auto w-160 max-w-full">
        <slot name="actions" />
      </div>
    </div>
  </main>
</template>
