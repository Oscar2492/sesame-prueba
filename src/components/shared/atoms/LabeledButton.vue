<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <button
    data-test-id="primary-button"
    class="bg-primary cursor-pointer rounded-xl px-3 py-2 text-white"
  >
    {{ props.label }}
  </button>
</template>
