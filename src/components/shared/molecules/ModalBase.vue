<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  isOpen: Boolean,
})
</script>

<template>
  <div
    v-if="isOpen"
    data-test-id="modal-overlay"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
  >
    <div
      ref="target"
      data-test-id="modal-container"
      class="w-[300px] rounded-md bg-white p-6 shadow-lg"
    >
      <div data-test-id="modal-header" class="mb-4 text-lg font-semibold">
        <slot name="header" />
      </div>
      <div data-test-id="modal-content" class="text-sm text-gray-700">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
