<script setup lang="ts">
import { ref } from "vue"
import { Dialog, DialogTitle } from "@headlessui/vue"

const isOpen = ref(true)

function setIsOpen(value: boolean) {
  isOpen.value = value
}
</script>

<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

    <div class="fixed inset-0 flex items-center justify-center p-4">
      <DialogPanel class="w-full max-w-sm rounded bg-white">
        <DialogTitle>Complete your order</DialogTitle>
      </DialogPanel>
    </div>
  </Dialog>
</template>
