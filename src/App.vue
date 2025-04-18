<script setup lang="ts">
import { useVacancyStore } from './stores/vacancy.ts'
import { onMounted } from 'vue'

const vacancyStore = useVacancyStore()

onMounted(() => {
  vacancyStore.setVacancyStatus()
  vacancyStore.setVacancyCandidates()
})
//
// const vacancyStatus = computed(() => vacancyStore.vacancyStatus)
// const addNewCandidate = vacancyStore.addCandidates
</script>

<template>
  <router-view />
  <!--  <div>-->
  <!--    <div>-->
  <!--      <h2>VACANTES</h2>-->
  <!--      <pre>{{ vacancyStatus }}</pre>-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <h2>Candidatos</h2>-->
  <!--      <pre>{{ vacancyCandidates }}</pre>-->
  <!--    </div>-->
  <!--    <div>-->
  <!--      <button-->
  <!--        @click="-->
  <!--          addNewCandidate({-->
  <!--            firstName: 'Oscar',-->
  <!--            lastName: 'Roza',-->
  <!--            vacancyId: '00cf9726-17c6-4178-aa9c-bb1c6e86c267',-->
  <!--            statusId: '2d7d0346-921b-4944-ad8a-017e27062754',-->
  <!--          })-->
  <!--        "-->
  <!--      >-->
  <!--        AÑADIR Candidatos-->
  <!--      </button>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style scoped></style>
