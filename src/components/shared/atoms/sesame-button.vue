<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <button class="bg-button text-white py-2 px-3 rounded-xl cursor-pointer">
    {{ props.label }}
  </button>
</template>
