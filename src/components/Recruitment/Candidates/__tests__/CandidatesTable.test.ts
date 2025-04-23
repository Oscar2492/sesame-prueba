import { beforeEach, describe, expect, it, vi } from 'vitest'
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

beforeEach(() => {
  filteredCandidatesMock = [
    {
      id: '1',
      firstName: 'Oscar',
      lastName: 'Roza',
      createdAt: '2025-04-20T12:00:00.000Z',
      status: { name: 'New' },
    },
  ]
})
describe('CandidatesTable', () => {
  it('renders a list of candidates', () => {
    const wrapper = mount(CandidatesTable)
    expect(wrapper.text()).toContain('Oscar Roza')
  })
  it('renders no hay candidatos', async () => {
    filteredCandidatesMock = []

    const wrapper = mount(CandidatesTable)
    expect(wrapper.text()).toContain('No hay candidatos disponibles.')
  })
  it('renders date formated', () => {
    const wrapper = mount(CandidatesTable)
    expect(dateFormater).toHaveBeenCalledWith('2025-04-20T12:00:00.000Z')
    expect(wrapper.text()).toContain('21/04/2025')
  })
})
