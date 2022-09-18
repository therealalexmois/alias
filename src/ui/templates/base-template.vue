<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref, computed } from "vue"
import clsx from "clsx"

import Footer from "../organisms/footer.vue"

const height = ref(1)

function updateHeight() {
  height.value = window.innerHeight * 0.01
}

onBeforeMount(() => {
  updateHeight()
})

onMounted(() => {
  window.addEventListener("resize", updateHeight)
})

onUnmounted(() => {
  window.removeEventListener("resize", updateHeight)
})

const pageStyles = computed(() => ({
  height: height.value * 100 + "px",
}))
</script>
<template>
  <div class="page" :style="pageStyles">
    <slot name="header" />
    <main
      :class="
        clsx('container h-full overflow-y-auto', {
          'pt-8': !$slots.header,
          'pb-8': !$slots.footer,
        })
      "
    >
      <div
        class="mx-auto space-y-5 w-160 max-w-full h-full flex flex-coll tablet:space-y-8"
      >
        <slot />
      </div>
    </main>
    <Footer v-if="$slots.footer">
      <slot name="footer" />
    </Footer>
  </div>
</template>
