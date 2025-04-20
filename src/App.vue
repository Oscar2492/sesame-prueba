<script setup lang="ts">
import { useVacancyStore } from './stores/vacancy.ts'
import { onMounted } from 'vue'
import { useCandidatesStore } from '@/stores/candidates.ts'

const vacancyStore = useVacancyStore()
const candidatesStore = useCandidatesStore()

onMounted(() => {
  vacancyStore.setVacancyStatus()
  candidatesStore.setCandidates()
})
</script>

<template>
  <router-view />
</template>
