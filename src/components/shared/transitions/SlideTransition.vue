<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <transition
    name="slide"
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-300 ease-in"
    enter-from-class="-translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="-translate-x-full opacity-0"
  >
    <slot v-if="show" />
  </transition>
</template>
