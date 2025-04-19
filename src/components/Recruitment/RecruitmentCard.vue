<script setup lang="ts">
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader.vue'
import CandidatesAdd from '@/components/Recruitment/Candidates/CandidatesAdd.vue'
import VacancyColumns from '@/components/Recruitment/Vacancies/VacancyColumns.vue'
import { computed, ref, watch } from 'vue'
import { useCandidatesStore } from '@/stores/candidates.ts'
import SesameInput from '@/components/shared/atoms/sesame-input.vue'

const candidateStore = useCandidatesStore()
const filterCandidate = ref('')
watch(filterCandidate, () => {
  candidateStore.setSearchTerm(filterCandidate.value)
})
const selectedTab = ref('vacancy')
const isVacancySelected = computed(() => selectedTab.value === 'vacancy')
</script>

<template>
  <div
    class="flex flex-col flex-1 border border-gray-200 rounded-md p-4 bg-white min-h-[45.125rem]"
  >
    <recruitment-header v-model:selectedTab="selectedTab" />
    <div class="flex items-center justify-between my-4 flex-wrap gap-4">
      <sesame-input placeholder="Buscar" v-model="filterCandidate" height="s" width="l" />
      <candidates-add />
    </div>

    <vacancy-columns v-if="isVacancySelected" class="flex-1" />
  </div>
</template>
