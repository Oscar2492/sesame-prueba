export interface VacancyStatus {
  id: string
  name: string
  order: number
  companyId: string
  createdAt: string
  updatedAt: string
  vacancyId: string
}

export interface Candidate {
  firstName: string
  lastName: string
  vacancyId: string
  statusId: string
  status?: VacancyStatus
}
