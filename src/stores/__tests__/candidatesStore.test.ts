import { createPinia, setActivePinia } from 'pinia'
import { useCandidatesStore } from '../candidates'
import * as vacancyService from '../../services/vacancyService'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../../services/vacancyService', () => ({
  getCandidates: vi.fn(),
  addNewCandidates: vi.fn(),
  updateCandidates: vi.fn(),
}))

vi.mock('../vacancy', () => ({
  useVacancyStore: () => ({ vacancyId: '123' }),
}))

describe('Candidates Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('initializes the default state', () => {
    const store = useCandidatesStore()
    expect(store).toMatchObject({
      isLoading: false,
      candidates: [],
      searchTerm: '',
    })
  })

  it('setCandidates updates the Candidates list', async () => {
    const mock = [{ id: '1', firstName: 'Test', lastName: 'User', vacancyId: '123', statusId: 's' }]
    vi.mocked(vacancyService.getCandidates).mockResolvedValue({ data: mock })
    const store = useCandidatesStore()

    await store.setCandidates()
    expect(store.candidates).toEqual(mock)
  })

  it('addCandidates adds a new candidate', async () => {
    const candidate = { firstName: 'Oscar', lastName: 'Roza', vacancyId: '123', statusId: 's' }
    const result = [{ ...candidate, id: '1' }]
    vi.mocked(vacancyService.addNewCandidates).mockResolvedValue({ data: result })
    vi.mocked(vacancyService.getCandidates).mockResolvedValue({ data: result })

    const store = useCandidatesStore()
    await store.addCandidates(candidate)
    expect(store.candidates).toEqual(result)
  })

  it('updateCandidate updates a candidate', async () => {
    const updated = {
      id: '1',
      firstName: 'Nuevo',
      lastName: 'Apellido',
      vacancyId: '123',
      statusId: 's',
    }
    vi.mocked(vacancyService.updateCandidates).mockResolvedValue({ data: updated })

    const store = useCandidatesStore()
    store.candidates = [{ ...updated, lastName: 'Viejo' }]
    await store.updateCandidate(updated)
    expect(store.candidates[0].lastName).toBe('Apellido')
  })

  it('filteredCandidates responds to the searchTerm', () => {
    const store = useCandidatesStore()
    store.candidates = [
      { id: '1', firstName: 'Oscar', lastName: 'Roza', vacancyId: '123', statusId: 's' },
      { id: '2', firstName: 'Beltran', lastName: 'Garcia', vacancyId: '123', statusId: 's' },
    ]
    store.setSearchTerm('Oscar')
    expect(store.filteredCandidates).toHaveLength(1)
    store.setSearchTerm('')
    expect(store.filteredCandidates).toHaveLength(2)
  })
})
