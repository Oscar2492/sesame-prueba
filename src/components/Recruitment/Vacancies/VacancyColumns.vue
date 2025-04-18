<script setup lang="ts">
import VacancyColumn from '@/components/Recruitment/Vacancies/VacancyColumn.vue'
import { useVacancyStore } from '@/stores/vacancy.ts'
import { computed } from 'vue'

const vacancyStore = useVacancyStore()

const vacancyStatus = computed(() => vacancyStore.vacancyStatus)
</script>

<template>
  <div class="flex items-center justify-between gap-1.5 border border-gray-200 rounded-md p-11">
    <vacancy-column v-for="column in vacancyStatus" :key="column.id" :column="column" />
  </div>
</template>

<style scoped></style>
