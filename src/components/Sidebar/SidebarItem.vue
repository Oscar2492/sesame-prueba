<script setup lang="ts">
defineProps<{
  label: string
  active?: boolean
}>()
</script>

<template>
  <div
    class="text-font-purple border-font-purple cursor-pointer border-l-2 px-2 py-1 text-sm font-semibold transition-colors"
  >
    {{ label }}
  </div>
</template>
