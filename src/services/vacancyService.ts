import { useApi } from '@/services/api.ts'
import type { Candidate } from '@/Types'

export const getVacancyStatus = async (vacancyId: string) => {
  const { request } = useApi()
  return await request(`/recruitment/v1/candidate-status/${vacancyId}`, { method: 'GET' })
}
export const getCandidates = async (vacancyId: string) => {
  const { request } = useApi()
  return await request(`/recruitment/v1/vacancies/${vacancyId}/candidates`, { method: 'GET' })
}

export const addNewCandidates = async (candidate: Candidate) => {
  const { request } = useApi()
  return await request(`/recruitment/v1/candidates`, {
    method: 'POST',
    body: JSON.stringify(candidate),
  })
}
