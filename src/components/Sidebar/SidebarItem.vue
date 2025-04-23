<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div
    class="text-font-purple border-font-purple cursor-pointer border-l-2 px-2 py-1 text-sm font-semibold transition-colors"
    data-testid="sidebar-item"
  >
    <span data-testid="sidebar-item-label">{{ label }}</span>
  </div>
</template>
