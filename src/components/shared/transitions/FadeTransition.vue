<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <transition
    name="fade"
    enter-active-class="transition-opacity duration-500 ease-out"
    leave-active-class="transition-opacity duration-500 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <slot v-if="show" />
  </transition>
</template>
