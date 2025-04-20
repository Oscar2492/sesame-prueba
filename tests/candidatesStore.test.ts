import { createPinia, setActivePinia } from 'pinia'
import { useCandidatesStore } from '../src/stores/candidates'
import * as vacancyService from '../src/services/vacancyService'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Candidate } from '../src/Types'

vi.mock('../src/services/vacancyService', () => ({
  getCandidates: vi.fn(),
  addNewCandidates: vi.fn(),
  updateCandidates: vi.fn(),
}))

vi.mock('../src/stores/vacancy', () => ({
  useVacancyStore: vi.fn(() => ({
    vacancyId: '123',
  })),
}))

describe('Candidates Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('inicializa el estado correctamente', () => {
    const store = useCandidatesStore()
    expect(store.isLoading).toBe(false)
    expect(store.candidates).toEqual([])
    expect(store.searchTerm).toBe('')
  })

  it('setCandidates obtiene los candidatos y actualiza el estado', async () => {
    const mockCandidates: Candidate[] = [
      { id: '1', firstName: 'Juan', lastName: 'Pérez', vacancyId: '123', statusId: '123' },
      { id: '2', firstName: 'María', lastName: 'Gómez', vacancyId: '123', statusId: '123' },
    ]
    vi.mocked(vacancyService.getCandidates).mockResolvedValue({ data: mockCandidates })

    const store = useCandidatesStore()
    expect(store.isLoading).toBe(false)
    await store.setCandidates()
    expect(store.isLoading).toBe(false)
    expect(store.candidates).toEqual(mockCandidates)
    expect(vacancyService.getCandidates).toHaveBeenCalledWith('123')
  })

  it('addCandidates agrega un candidato y recarga la lista', async () => {
    const newCandidate: Candidate = {
      firstName: 'Ana',
      lastName: 'Roza',
      vacancyId: '123',
      statusId: '123',
    }
    const updatedCandidates: Candidate[] = [
      { id: '1', firstName: 'Ana', lastName: 'Roza', vacancyId: '123', statusId: '123' },
    ]
    vi.mocked(vacancyService.addNewCandidates).mockResolvedValue({ data: updatedCandidates })
    vi.mocked(vacancyService.getCandidates).mockResolvedValue({ data: updatedCandidates })

    const store = useCandidatesStore()
    await store.addCandidates(newCandidate)
    expect(store.isLoading).toBe(false)
    expect(store.candidates).toEqual(updatedCandidates)
    expect(vacancyService.addNewCandidates).toHaveBeenCalledWith(newCandidate)
    expect(vacancyService.getCandidates).toHaveBeenCalledWith('123')
  })

  it('updateCandidate actualiza un candidato en la lista', async () => {
    const initialCandidates: Candidate[] = [
      { id: '1', firstName: 'Juan', lastName: 'Pérez', vacancyId: '123', statusId: '123' },
    ]
    const updatedCandidate: Candidate = {
      id: '1',
      firstName: 'Juan',
      lastName: 'Rodríguez',
      vacancyId: '123',
      statusId: '123',
    }
    vi.mocked(vacancyService.updateCandidates).mockResolvedValue({ data: updatedCandidate })
    const store = useCandidatesStore()
    store.candidates = initialCandidates

    await store.updateCandidate(updatedCandidate)
    expect(store.isLoading).toBe(false)
    expect(store.candidates).toEqual([updatedCandidate])
    expect(vacancyService.updateCandidates).toHaveBeenCalledWith(updatedCandidate)
  })

  it('filtra candidatos según el término de búsqueda', () => {
    const store = useCandidatesStore()
    store.candidates = [
      { id: '1', firstName: 'Juan', lastName: 'Pérez', vacancyId: '123', statusId: '123' },
      { id: '2', firstName: 'María', lastName: 'Gómez', vacancyId: '123', statusId: '123' },
    ]

    store.setSearchTerm('Juan')
    expect(store.searchTerm).toBe('Juan')
    expect(store.filteredCandidates).toEqual([
      { id: '1', firstName: 'Juan', lastName: 'Pérez', vacancyId: '123', statusId: '123' },
    ])

    store.setSearchTerm('Gómez')
    expect(store.filteredCandidates).toEqual([
      { id: '2', firstName: 'María', lastName: 'Gómez', vacancyId: '123', statusId: '123' },
    ])

    store.setSearchTerm('')
    expect(store.filteredCandidates).toEqual(store.candidates)
  })

  it('maneja errores en setCandidates', async () => {
    vi.mocked(vacancyService.getCandidates).mockRejectedValue(new Error('API Error'))
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const store = useCandidatesStore()
    await store.setCandidates()
    expect(store.isLoading).toBe(false)
    expect(store.candidates).toEqual([])
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error al obtener los candidatos de la vacante :',
      expect.any(Error),
    )
    consoleErrorSpy.mockRestore()
  })
})
