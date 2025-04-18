import { defineStore } from 'pinia'
import {
  addNewCandidates,
  getVacancyCandidates,
  getVacancyStatus,
} from '@/services/vacancyService.ts'
import { ref } from 'vue'
import type { Candidate, VacancyStatus } from '@/Types'

export const useVacancyStore = defineStore('vacancy', () => {
  const vacancyId: string = '00cf9726-17c6-4178-aa9c-bb1c6e86c267'

  const isLoading = ref(false)
  const vacancyStatus = ref<VacancyStatus[]>([])
  const vacancyCandidates = ref<Candidate[]>([])

  async function setVacancyStatus() {
    isLoading.value = true
    try {
      const response = await getVacancyStatus(vacancyId)
      vacancyStatus.value = response.data
    } catch (error) {
      console.error('Error al obtener los datos de estado de las vacantes:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function setVacancyCandidates() {
    isLoading.value = true
    try {
      const response = await getVacancyCandidates(vacancyId)
      vacancyCandidates.value = response.data
    } catch (error) {
      console.error('Error al obtener los candidatos de la vacante :', error)
    } finally {
      isLoading.value = false
    }
  }

  async function addCandidates(candidate: Candidate) {
    isLoading.value = true
    try {
      const response = await addNewCandidates(candidate)
      vacancyCandidates.value = response.data
    } catch (error) {
      console.error('Error al obtener los candidatos de la vacante :', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    setVacancyStatus,
    setVacancyCandidates,
    addCandidates,
    vacancyStatus,
    isLoading,
    vacancyCandidates,
  }
})
