<script setup lang="ts">
type TProps = {
  value: string
}

const props = withDefaults(defineProps<TProps>(), {
  value: "01:00",
})
</script>
<template>
  <span class="text-2xl font-semibold tablet:text-4xl">
    {{ value }}
  </span>
</template>
