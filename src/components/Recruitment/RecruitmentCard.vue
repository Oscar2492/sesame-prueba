<script setup lang="ts">
import RecruitmentHeader from '@/components/Recruitment/RecruitmentHeader.vue'
import CandidatesSearch from '@/components/Recruitment/Candidates/CandidatesSearch.vue'
import CandidatesAdd from '@/components/Recruitment/Candidates/CandidatesAdd.vue'
import VacancyColumns from '@/components/Recruitment/Vacancies/VacancyColumns.vue'
</script>

<template>
  <div>
    <recruitment-header />
    <div>
      <candidates-search />
      <candidates-add />
    </div>
    <vacancy-columns />
  </div>
</template>

<style scoped></style>
