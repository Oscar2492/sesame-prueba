<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['modal-close'])
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div ref="target" class="w-[300px] rounded-md bg-white p-6 shadow-lg">
      <div class="mb-4 text-lg font-semibold">
        <slot name="header" />
      </div>
      <div class="text-sm text-gray-700">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
