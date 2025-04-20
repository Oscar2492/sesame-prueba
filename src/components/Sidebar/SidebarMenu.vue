<script setup lang="ts">
import SidebarSection from './SidebarSection.vue'
import { ref } from 'vue'
import ChevronArrow from '@/components/shared/atoms/ChevronArrow.vue'

const isOpen = ref(true)
</script>

<template>
  <aside class="w-64 min-w-3xs bg-white p-4 shadow-md">
    <div class="p-4 text-center">
      <img src="@/assets/images/logo-sesame-hr.svg" alt="Sesame Logo" />
    </div>

    <div class="px-2 py-3">
      <div
        @click="isOpen = !isOpen"
        class="mb-2 flex cursor-pointer items-center justify-between text-xs font-semibold text-gray-400 hover:bg-gray-100"
      >
        <span class="text-xs font-normal"> ADMINISTRADOR</span>
        <ChevronArrow :isOpen="isOpen" color="neutral" />
      </div>
      <SidebarSection v-if="isOpen" title="Talento">
        <template #icon>
          <img src="@/assets/icons/icon-star.svg" alt="star" />
        </template>
      </SidebarSection>
    </div>
  </aside>
</template>
