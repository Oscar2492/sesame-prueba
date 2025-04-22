<script setup lang="ts">
import SidebarSection from './SidebarSection.vue'
import ChevronArrow from '@/components/shared/atoms/ChevronArrow.vue'
import { ref } from 'vue'

const isOpen = ref(true)

const toggleSection = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <aside class="w-64 min-w-3xs bg-white p-4">
    <div class="flex justify-center p-4">
      <img src="@/assets/images/logo-sesame-hr.svg" alt="Sesame Logo" class="max-w-full" />
    </div>

    <div class="px-2 py-3">
      <div
        @click="toggleSection"
        class="mb-2 flex cursor-pointer items-center justify-between rounded px-2 py-1 text-xs font-semibold text-gray-400 hover:bg-gray-100"
      >
        <span class="text-xs font-normal">ADMINISTRADOR</span>
        <ChevronArrow :isOpen="isOpen" color="neutral" />
      </div>
      <SidebarSection v-if="isOpen" title="Talento">
        <template #icon>
          <img src="@/assets/icons/icon-star.svg" alt="Star icon" />
        </template>
      </SidebarSection>
    </div>
  </aside>
</template>
