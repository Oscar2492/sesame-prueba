<script setup lang="ts">
defineProps<{
  isOpen: boolean
  color: 'neutral' | 'purple'
}>()
</script>

<template>
  <svg
    :class="[{ 'rotate-180': !isOpen }, `color-${color}`]"
    class="transition-transform duration-300 ease-in-out"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-test-id="arrow-svg"
  >
    <path
      d="M12 10L8 6L4 10"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
