<script setup lang="ts">
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader.vue'
import CandidatesAdd from '@/components/Recruitment/Candidates/CandidatesAdd.vue'
import VacancyColumns from '@/components/Recruitment/Vacancies/VacancyColumns.vue'
import { ref, watch } from 'vue'
import { useCandidatesStore } from '@/stores/candidates.ts'
import SesameInput from '@/components/shared/atoms/sesame-input.vue'

const candidateStore = useCandidatesStore()
const filterCandidate = ref('')
watch(filterCandidate, () => {
  candidateStore.setSearchTerm(filterCandidate.value)
})
</script>

<template>
  <div class="w-5xl border border-gray-200 rounded-md p-4">
    <recruitment-header />
    <div class="flex items-center justify-between">
      <sesame-input placeholder="Buscar" v-model="filterCandidate" height="s" width="l" />
      <candidates-add />
    </div>
    <vacancy-columns />
  </div>
</template>
