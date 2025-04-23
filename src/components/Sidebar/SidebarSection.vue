<script setup lang="ts">
import { ref } from 'vue'
import SidebarItem from '@/components/Sidebar/SidebarItem.vue'
import ChevronArrow from '@/components/shared/atoms/ChevronArrow.vue'

defineProps<{
  title: string
}>()

const isOpen = ref(true)
</script>

<template>
  <div class="bg-neutral-background rounded-lg p-2" data-testid="sidebar-container">
    <div
      class="text-font-purple flex w-full cursor-pointer items-center justify-between gap-2 rounded py-2 text-sm font-medium hover:bg-gray-100"
      @click="isOpen = !isOpen"
      data-testid="sidebar-header"
    >
      <div class="flex items-center gap-1">
        <slot name="icon" />
        <span data-testid="sidebar-title">{{ title }}</span>
      </div>
      <ChevronArrow :isOpen="isOpen" color="purple" />
    </div>

    <div v-if="isOpen" class="mt-1 flex flex-col gap-1 pl-2" data-testid="sidebar-content">
      <SidebarItem label="Reclutamiento" />
    </div>
  </div>
</template>
