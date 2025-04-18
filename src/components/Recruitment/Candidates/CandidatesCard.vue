<script setup lang="ts">
import { useVacancyStore } from '@/stores/vacancy.ts'
import { computed } from 'vue'

const vacancyStore = useVacancyStore()
const vacancyCandidates = computed(() => vacancyStore.vacancyCandidates)
</script>

<template>
  <div v-for="candidate in vacancyCandidates" :key="candidate.firstName">
    {{ candidate.firstName }} {{ candidate.lastName }}
  </div>
</template>

<style scoped></style>
