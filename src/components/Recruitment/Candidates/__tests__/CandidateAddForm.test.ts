import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LabeledButton from '../../../shared/atoms/LabeledButton.vue'
import CandidateAddForm from '../CandidateAddForm.vue'

const mockAddCandidates = vi.fn()
vi.mock('../../../../stores/candidates', () => {
  return {
    useCandidatesStore: vi.fn(() => ({
      addCandidates: mockAddCandidates,
    })),
  }
})
describe('Candidate add form', () => {
  it('renders correctly', () => {
    const wrapper = mount(CandidateAddForm)

    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.findComponent(LabeledButton).exists()).toBe(true)
  })
  it('creates a new candidate and emits close', async () => {
    const wrapper = mount(CandidateAddForm)

    await wrapper.find('input#firstName').setValue('Oscar')
    await wrapper.find('input#lastName').setValue('Roza')

    await wrapper.find('form').trigger('submit.prevent')

    expect(mockAddCandidates).toHaveBeenCalledWith({
      firstName: 'Oscar',
      lastName: 'Roza',
      vacancyId: '00cf9726-17c6-4178-aa9c-bb1c6e86c267',
      statusId: 'cc93e42e-6551-47cf-b30e-3e5797406f01',
    })

    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
