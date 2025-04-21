<script setup lang="ts">
import VacancyColumn from '@/components/Recruitment/Vacancies/VacancyColumn.vue'
import { useVacancyStore } from '@/stores/vacancy.ts'
import { computed } from 'vue'

const vacancyStore = useVacancyStore()

const vacancyStatus = computed(() =>
  vacancyStore.vacancyStatus.filter((vacancy) => vacancy.name.toLocaleLowerCase() !== 'oferta'),
)
const icons = ['new', 'interview', 'hired', 'ban']
</script>

<template>
  <div
    class="scroll-custom flex h-[37rem] items-stretch justify-between gap-1.5 overflow-x-auto p-4"
  >
    <vacancy-column
      v-for="(column, index) in vacancyStatus"
      :key="column.id"
      :column="column"
      :img="icons[index]"
    />
  </div>
</template>
