<script setup lang="ts">
import VacancyColumn from '@/components/Recruitment/Vacancies/VacancyColumn.vue'
import { useVacancyStore } from '@/stores/vacancy.ts'
import { computed } from 'vue'

const vacancyStore = useVacancyStore()

const vacancyStatus = computed(() => vacancyStore.vacancyStatus)
</script>

<template>
  <vacancy-column v-for="column in vacancyStatus" :key="column.id" :column="column" />
</template>

<style scoped></style>
