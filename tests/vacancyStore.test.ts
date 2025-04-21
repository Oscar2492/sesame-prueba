import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useVacancyStore } from '../src/stores/vacancy'
import { VacancyStatus } from '../src/Types'
import * as vacancyService from '../src/services/vacancyService'

vi.mock('../src/services/vacancyService', () => ({
  getVacancyStatus: vi.fn(),
}))

describe('Vacancy Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('initializes state correctly', () => {
    const store = useVacancyStore()
    expect(store.isLoading).toBe(false)
    expect(store.vacancyId).toEqual('00cf9726-17c6-4178-aa9c-bb1c6e86c267')
    expect(store.statusNewId).toEqual('cc93e42e-6551-47cf-b30e-3e5797406f01')
    expect(store.vacancyStatus).toEqual([])
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
    vi.mocked(vacancyService.getVacancyStatus).mockResolvedValue({ data: mockVacancyStatus })
    const store = useVacancyStore()
    expect(store.isLoading).toBe(false)
    await store.setVacancyStatus()
    expect(store.isLoading).toBe(false)
    expect(store.vacancyStatus).toEqual(mockVacancyStatus)
    expect(vacancyService.getVacancyStatus).toHaveBeenCalledWith(
      '00cf9726-17c6-4178-aa9c-bb1c6e86c267',
    )
  })
})
