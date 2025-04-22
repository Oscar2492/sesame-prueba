<script setup lang="ts">
import RecruitmentCard from '@/components/Recruitment/RecruitmentCard.vue'
import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue'
import { useIsMobile } from '@/utils/isMobile'
import { ref } from 'vue'
import SlideTransition from '@/components/shared/transitions/SlideTransition.vue'

const { isMobile } = useIsMobile()
const isSidebarOpen = ref(false)
</script>

<template>
  <div class="flex min-h-screen overflow-hidden px-9" :class="{ 'pl-0': isMobile }">
    <SlideTransition :show="!isMobile || isSidebarOpen">
      <SidebarMenu />
    </SlideTransition>
    <div v-if="isMobile" class="shadow-r-md mt-4 self-start">
      <img
        src="@/assets/icons/icon-burger.svg"
        alt="menu"
        @click="isSidebarOpen = !isSidebarOpen"
        class="cursor-pointer rounded-r-sm bg-white p-1"
      />
    </div>

    <main class="ml-4 flex-1 overflow-x-hidden py-3">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-3xl font-bold">Reclutamiento</h1>
        <img src="@/assets/images/shurperro.png" alt="shurperro" class="h-10 w-10" />
      </div>
      <RecruitmentCard />
    </main>
  </div>
</template>
