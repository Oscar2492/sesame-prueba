<script setup lang="ts">
import type { VacancyStatus } from '@/Types'
import CandidatesCard from '@/components/Recruitment/Candidates/CandidatesCard.vue'

defineProps<{
  column: VacancyStatus
}>()
</script>

<template>
  <div>
    <div>
      <h2>{{ column.name }}</h2>
    </div>
    <candidates-card />
  </div>
</template>

<style scoped></style>
