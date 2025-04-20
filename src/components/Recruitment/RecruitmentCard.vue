<script setup lang="ts">
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader.vue'
import CandidatesAdd from '@/components/Recruitment/Candidates/CandidatesAdd.vue'
import VacancyColumns from '@/components/Recruitment/Vacancies/VacancyColumns.vue'
import { computed, ref, watch } from 'vue'
import { useCandidatesStore } from '@/stores/candidates.ts'
import SesameInput from '@/components/shared/atoms/sesame-input.vue'
import CandidatesTable from '@/components/Recruitment/Candidates/CandidatesTable.vue'

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
    class="flex min-h-[45.125rem] flex-1 flex-col rounded-md border border-gray-200 bg-white p-4"
  >
    <recruitment-header v-model:selectedTab="selectedTab" />
    <div class="my-4 flex flex-wrap items-center justify-between gap-4 px-4">
      <sesame-input placeholder="Buscar" v-model="filterCandidate" height="s" width="l" />
      <candidates-add />
    </div>

    <vacancy-columns v-if="isVacancySelected" class="flex-1" />
    <candidates-table v-else />
  </div>
</template>
