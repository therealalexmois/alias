<template>
  <div class="space-y-8 tablet:space-y-10">
    <slot name="header" />
  </div>
  <div class="grow flex items-center justify-center">
    <slot />
  </div>
  <slot name="actions" />
</template>
