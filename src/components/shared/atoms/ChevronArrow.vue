<script setup lang="ts">
import { computed } from 'vue'
import neutralChevron from '@/assets/icons/icon-chevron-down.svg'
import purpleChevron from '@/assets/icons/icon-chevron-down-purple.svg'

const props = defineProps<{
  isOpen: boolean
  color: 'neutral' | 'purple'
}>()
const chevron = computed(() => (props.color === 'neutral' ? neutralChevron : purpleChevron))
</script>

<template>
  <img
    :class="{ 'rotate-180': !isOpen }"
    :src="chevron"
    alt="arrow"
    class="transition-transform duration-300 ease-in-out"
  />
</template>
