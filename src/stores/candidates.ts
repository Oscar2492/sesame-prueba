import { defineStore } from 'pinia'
import { addNewCandidates, getCandidates } from '@/services/vacancyService.ts'
import { computed, ref } from 'vue'
import type { Candidate } from '@/Types'
import { useVacancyStore } from '@/stores/vacancy.ts'

export const useCandidatesStore = defineStore('candidates', () => {
  const isLoading = ref(false)
  const candidates = ref<Candidate[]>([])
  const searchTerm = ref('')

  async function setCandidates() {
    isLoading.value = true
    try {
      const response = await getCandidates(useVacancyStore().vacancyId)
      candidates.value = response.data
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
      candidates.value = response.data
      await setCandidates()
    } catch (error) {
      console.error('Error al agregar el candidato:', error)
    } finally {
      isLoading.value = false
    }
  }

  const filteredCandidates = computed(() =>
    candidates.value.filter((candidate) => {
      const fullName = `${candidate.firstName ?? ''} ${candidate.lastName ?? ''}`.toLowerCase()
      const search = searchTerm.value.toLowerCase().trim()

      return fullName.includes(search)
    }),
  )

  function setSearchTerm(term: string) {
    searchTerm.value = term
  }

  return {
    setCandidates,
    addCandidates,
    isLoading,
    candidates,
    filteredCandidates,
    setSearchTerm,
  }
})
