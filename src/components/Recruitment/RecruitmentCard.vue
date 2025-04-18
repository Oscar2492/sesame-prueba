<script setup lang="ts">
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader.vue'
import CandidatesSearch from '@/components/Recruitment/Candidates/CandidatesSearch.vue'
import CandidatesAdd from '@/components/Recruitment/Candidates/CandidatesAdd.vue'
import VacancyColumns from '@/components/Recruitment/Vacancies/VacancyColumns.vue'
</script>

<template>
  <div class="w-5xl border border-gray-200 rounded-md p-4">
    <recruitment-header />
    <div class="flex items-center justify-between">
      <candidates-search />
      <candidates-add />
    </div>
    <vacancy-columns />
  </div>
</template>
