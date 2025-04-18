<script setup lang="ts">
import { useVacancyStore } from '@/stores/vacancy.ts'
import { computed } from 'vue'
import type { Candidate, VacancyStatus } from '@/Types'

const props = defineProps<{
  vacancy: VacancyStatus
}>()
const vacancyStore = useVacancyStore()
const vacancyCandidates = computed(() => vacancyStore.vacancyCandidates)
const vacancyCandidatesfilter = computed(() => {
  return vacancyCandidates.value.filter((candidate: Candidate) => {
    return candidate.status.id === props.vacancy.id
  })
})
</script>

<template>
  <div v-for="candidate in vacancyCandidatesfilter" :key="candidate.firstName">
    {{ candidate.firstName }} {{ candidate.lastName }}
  </div>
</template>

<style scoped></style>
