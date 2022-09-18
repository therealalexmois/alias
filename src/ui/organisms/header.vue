<template>
  <header
    class="relative py-6 px-4 flex items-center justify-center bg-black drop-shadow-lg tablet:px-16"
  >
    <div
      v-if="$slots.left"
      class="absolute left-4 top-1/2 inline-flex -translate-y-1/2"
    >
      <slot name="left" />
    </div>
    <slot name="middle" />
    <div
      v-if="$slots.right"
      class="absolute right-4 top-1/2 -translate-y-1/2 space-x-1 inline-flex items-center"
    >
      <slot name="right" />
    </div>
  </header>
</template>
