import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import VacancyColumn from '../VacancyColumn.vue'
import CandidatesCard from '../../Candidates/CandidatesCard.vue'

vi.mock('@/assets/icons/icon-new.svg', () => ({
  default: '@/assets/icons/icon-new.svg',
}))

let filteredCandidatesMock = []
const mockUpdateCandidate = vi.fn()

vi.mock('@/stores/Candidates', () => ({
  useCandidatesStore: () => ({
    get filteredCandidates() {
      return filteredCandidatesMock
    },
    updateCandidate: mockUpdateCandidate,
  }),
}))

describe('VacancyColumn', () => {
  const candidates = [
    { firstName: 'Oscar', lastName: 'Roza', status: { id: 1 } },
    { firstName: 'Beltran', lastName: 'Garcia', status: { id: 1 } },
  ]

  it('renders with white background when has candidates', () => {
    filteredCandidatesMock = candidates
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'New' },
        img: 'new',
      },
    })
    const columnContainer = wrapper.find('[data-testid="vacancy-status-new"]')
    expect(columnContainer.classes()).toContain('bg-white')
  })

  it('renders with neutral background when no candidates', () => {
    filteredCandidatesMock = []
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'New' },
        img: 'new',
      },
    })
    const columnContainer = wrapper.find('[data-testid="vacancy-status-new"]')
    expect(columnContainer.classes()).toContain('bg-neutral-background')
  })

  it('displays the correct icon based on the "img" prop', () => {
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'New' },
        img: 'new',
      },
    })
    const icon = wrapper.find('[data-testid="vacancy-status-icon-new"]')
    expect(icon.attributes('src')).toEqual('@/assets/icons/icon-new.svg')
  })

  it('renders the correct column name', () => {
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'Interview' },
        img: 'interview',
      },
    })
    expect(wrapper.text()).toContain('Interview')
  })

  it('renders the correct number of candidates', () => {
    filteredCandidatesMock = candidates
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'New' },
        img: 'new',
      },
    })
    const candidatesWrapper = wrapper.findComponent(CandidatesCard)
    expect(candidatesWrapper.props('candidates')).toHaveLength(2)
  })

  it('calls updateCandidate when a candidate is dropped', async () => {
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: '3', name: 'Hired' },
        img: 'hired',
      },
    })

    const candidate = {
      id: '123',
      firstName: 'Oscar',
      lastName: 'Roza',
      vacancyId: '2',
      statusId: '1',
    }

    const dataTransfer = {
      getData: vi.fn(() => JSON.stringify(candidate)),
    }

    await wrapper.trigger('drop', {
      dataTransfer,
    })

    expect(mockUpdateCandidate).toHaveBeenCalledWith({
      id: '123',
      firstName: 'Oscar',
      lastName: 'Roza',
      vacancyId: '2',
      statusId: '3',
    })
  })
})
