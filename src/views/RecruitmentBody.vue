<script setup lang="ts">
import RecruitmentCard from '@/components/Recruitment/RecruitmentCard.vue'
import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue'
</script>

<template>
  <div class="flex min-h-screen overflow-hidden px-9">
    <SidebarMenu />
    <main class="ml-4 flex-1 overflow-x-hidden py-3">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-3xl font-bold">Reclutamiento</h1>
        <img src="@/assets/images/shurperro.png" alt="shurperro" class="h-10 w-10" />
      </div>
      <recruitment-card />
    </main>
  </div>
</template>
