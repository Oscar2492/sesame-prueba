<script setup lang="ts">
import type { VacancyStatus } from '@/Types'
import CandidatesCard from '@/components/Recruitment/Candidates/CandidatesCard.vue'
import { computed } from 'vue'

const props = defineProps<{
  column: VacancyStatus
}>()
const background = computed(() => 'bg-neutral')
</script>

<template>
  <div
    class="w-72 h-40 bg-neutral border border-gray-200 rounded-md text-center"
    :class="background"
  >
    <div class="bg-gray color-gray-800">
      <h2>{{ column.name }}</h2>
    </div>
    <candidates-card :vacancy="props.column" />
  </div>
</template>

<style scoped></style>
