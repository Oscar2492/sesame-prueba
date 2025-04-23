import { describe, expect, it, vi } from 'vitest'
import CandidatesTable from '../CandidatesTable.vue'
import { mount } from '@vue/test-utils'
import { dateFormater } from '../../../shared/utils/dateFormater'

let filteredCandidatesMock = []

vi.mock('@/stores/candidates.ts', () => ({
  useCandidatesStore: () => ({
    get filteredCandidates() {
      return filteredCandidatesMock
    },
  }),
}))

vi.mock('@/components/shared/utils/dateFormater.ts', () => {
  return {
    dateFormater: vi.fn(() => '21/04/2025'),
  }
})

describe('CandidatesTable', () => {
  const candidates = [
    {
      id: '1',
      firstName: 'Oscar',
      lastName: 'Roza',
      createdAt: '2025-04-20T12:00:00.000Z',
      status: { name: 'Nuevo' },
    },
    {
      id: '2',
      firstName: 'Beltran',
      lastName: 'Garcia',
      createdAt: '2025-04-21T12:00:00.000Z',
      status: { name: 'En proceso' },
    },
    {
      id: '3',
      firstName: 'Borja',
      lastName: 'Fombona',
      createdAt: '2025-04-22T12:00:00.000Z',
      status: { name: 'Descartado' },
    },
  ]

  it('should render candidates list with all information', () => {
    filteredCandidatesMock = candidates
    const wrapper = mount(CandidatesTable)

    const candidateRows = wrapper.findAll('[data-testid="candidate-name"]')
    expect(candidateRows.length).toBe(filteredCandidatesMock.length)

    candidates.forEach((candidate) => {
      const fullName = `${candidate.firstName} ${candidate.lastName}`
      expect(wrapper.text()).toContain(fullName)

      expect(wrapper.text()).toContain(candidate.status.name)

      expect(dateFormater).toHaveBeenCalledWith(candidate.createdAt, expect.any(Function), 'es')
      expect(wrapper.text()).toContain('21/04/2025')
    })
  })

  it('should display - when status name is not available', () => {
    filteredCandidatesMock = [
      {
        id: '1',
        firstName: 'Oscar',
        lastName: 'Roza',
        createdAt: '2025-04-20T12:00:00.000Z',
        status: {},
      },
    ]

    const wrapper = mount(CandidatesTable)
    const statusCell = wrapper.find('[data-testid="candidate-vacancy"]')

    expect(statusCell.exists()).toBe(true)
    expect(statusCell.text()).toBe('-')
  })
  it('should render no candidates message when list is empty', () => {
    filteredCandidatesMock = []
    const wrapper = mount(CandidatesTable)
    const noDataMessage = wrapper.find('[data-testid="no-candidates-message"]')
    expect(noDataMessage.text()).toBe('No hay candidatos disponibles.')
  })
})
