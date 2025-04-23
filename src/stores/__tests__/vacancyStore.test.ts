import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useVacancyStore } from '../vacancy'
import { VacancyStatus } from '../../Types'
import * as vacancyService from '../../services/vacancyService'

vi.mock('../../services/vacancyService', () => ({
  getVacancyStatus: vi.fn(() => Promise.resolve({ data: [] })),
}))

describe('Vacancy Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('setVacancyStatus fetches Vacancies', async () => {
    const mockVacancyStatus: VacancyStatus[] = [
      {
        id: 'stage-1',
        name: 'Applied',
        order: 1,
        companyId: 'company-123',
        createdAt: '2024-04-01T10:00:00Z',
        updatedAt: '2024-04-01T10:00:00Z',
        vacancyId: '123',
      },
      {
        id: 'stage-2',
        name: 'Interview',
        order: 2,
        companyId: 'company-123',
        createdAt: '2024-04-02T14:30:00Z',
        updatedAt: '2024-04-02T14:30:00Z',
        vacancyId: '123',
      },
    ]

    const mockedGetVacancyStatus = vi.mocked(vacancyService.getVacancyStatus)
    mockedGetVacancyStatus.mockImplementation(() => Promise.resolve({ data: mockVacancyStatus }))

    const store = useVacancyStore()
    expect(store.isLoading).toBe(false)
    await store.setVacancyStatus()
    expect(store.isLoading).toBe(false)
    expect(store.vacancyStatus).toEqual(mockVacancyStatus)
    expect(mockedGetVacancyStatus).toHaveBeenCalledWith('00cf9726-17c6-4178-aa9c-bb1c6e86c267')
  })
})
