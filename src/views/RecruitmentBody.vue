<script setup lang="ts">
import RecruitmentCard from '@/components/Recruitment/RecruitmentCard.vue'
import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue'
import SlideTransition from '@/components/shared/transitions/SlideTransition.vue'
import { useIsMobile } from '@/utils/isMobile'
import { computed, ref } from 'vue'

const { isMobile } = useIsMobile()
const isSidebarOpen = ref(false)

const sidebarClasses = computed(() => ({
  'fixed inset-0 z-50 flex flex-col items-center bg-white pt-6':
    isMobile.value && isSidebarOpen.value,
  'min-h-screen w-64 overflow-hidden bg-white shadow-md': !isMobile.value,
}))

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex min-h-screen overflow-hidden px-9" :class="{ 'pl-0': isMobile }">
    <SlideTransition :show="!isMobile || isSidebarOpen">
      <div :class="sidebarClasses">
        <SidebarMenu />
        <div v-if="isMobile && isSidebarOpen" class="absolute top-0 left-0 mt-4">
          <img
            src="@/assets/icons/icon-burger.svg"
            alt="Close menu"
            @click="toggleSidebar"
            class="cursor-pointer rounded-r-sm bg-white p-1"
          />
        </div>
      </div>
    </SlideTransition>

    <div v-if="isMobile && !isSidebarOpen" class="mt-4">
      <img
        src="@/assets/icons/icon-burger.svg"
        alt="Open menu"
        @click="toggleSidebar"
        class="cursor-pointer rounded-r-sm bg-white p-1"
      />
    </div>

    <main class="ml-4 flex-1 overflow-x-hidden py-3">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-3xl font-bold">Reclutamiento</h1>
        <img
          v-if="!isMobile && !isSidebarOpen"
          src="@/assets/images/shurperro.png"
          alt="shurperro"
          class="h-10 w-10"
        />
      </div>
      <RecruitmentCard />
    </main>
  </div>
</template>
