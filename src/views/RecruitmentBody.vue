<script setup lang="ts">
import RecruitmentCard from '@/components/Recruitment/RecruitmentCard.vue'
</script>

<template>
  <div class="flex min-h-screen overflow-hidden px-9">
    <aside class="min-w-3xs w-64 bg-white shadow-md">Barra lateral</aside>
    <main class="ml-4 flex-1 py-3 overflow-x-hidden">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-bold">Reclutamiento</h1>
        <img src="@/assets/images/shurperro.png" alt="shurperro" class="h-10 w-10" />
      </div>
      <recruitment-card />
    </main>
  </div>
</template>
