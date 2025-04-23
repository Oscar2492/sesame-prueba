import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import VacancyColumn from '../VacancyColumn.vue'

vi.mock('@/assets/icons/icon-new.svg', () => ({
  default: '@/assets/icons/icon-new.svg',
}))

const mockUpdateCandidate = vi.fn()
vi.mock('@/stores/Candidates', () => {
  return {
    useCandidatesStore: vi.fn(() => ({
      filteredCandidates: [
        { firstName: 'Oscar', lastName: 'Roza', status: { id: 1 } },
        { firstName: 'Beltran', lastName: 'Garcia', status: { id: 1 } },
      ],
      updateCandidate: mockUpdateCandidate,
    })),
  }
})
describe('VacancyColumn', () => {
  it('renders the correct background based on Candidates', () => {
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'New' },
        img: 'new',
      },
    })
    const div = wrapper.find('div')
    expect(div.classes()).toContain('bg-white')
  })
  it('displays the correct icon based on the "img" prop', () => {
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'New' },
        img: 'new',
      },
    })
    const icon = wrapper.find('img')
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
  it('renders the correct number of Candidates', () => {
    const wrapper = mount(VacancyColumn, {
      props: {
        column: { id: 1, name: 'New' },
        img: 'new',
      },
    })
    expect(wrapper.text()).toContain('Oscar')
    expect(wrapper.text()).toContain('Beltran')
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
