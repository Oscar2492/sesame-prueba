import { defineStore } from 'pinia'
import { getVacancyStatus } from '@/services/vacancyService.ts'
import { ref } from 'vue'
import type { VacancyStatus } from '@/Types'

export const useVacancyStore = defineStore('vacancy', () => {
  const vacancyId: string = '00cf9726-17c6-4178-aa9c-bb1c6e86c267'
  const statusNewId = 'cc93e42e-6551-47cf-b30e-3e5797406f01'
  const isLoading = ref(false)
  const vacancyStatus = ref<VacancyStatus[]>([])

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

  return {
    setVacancyStatus,
    vacancyStatus,
    isLoading,
    statusNewId,
    vacancyId,
  }
})
