import { describe, expect, it, vi } from 'vitest'
import CandidatesCard from '../CandidatesCard.vue'
import { mount } from '@vue/test-utils'
import { fireEvent } from '@testing-library/vue'

describe('CandidatesCard', () => {
  const candidates = [
    { firstName: 'Oscar', lastName: 'Roza', status: { id: 1 } },
    { firstName: 'Beltran', lastName: 'Garcia', status: { id: 1 } },
  ]

  it('renders the correct number of candidates', () => {
    const wrapper = mount(CandidatesCard, {
      props: { candidates },
    })
    const cards = wrapper.findAll('[data-testid="candidate-name"]')
    expect(cards.length).toBe(candidates.length)
  })

  it('renders the correct candidate names', () => {
    const wrapper = mount(CandidatesCard, {
      props: { candidates },
    })

    candidates.forEach((candidate) => {
      const fullName = `${candidate.firstName} ${candidate.lastName}`
      expect(wrapper.text()).toContain(fullName)
    })
  })

  it('transfer candidate when is dragged', async () => {
    const wrapper = mount(CandidatesCard, {
      props: {
        candidates: [candidates[0]],
      },
    })
    const candidateEl = wrapper.find('[data-testid="candidate-card"]')
    const setData = vi.fn()
    const mockEvent = { dataTransfer: { setData } }

    await fireEvent.dragStart(candidateEl.element, mockEvent)

    expect(setData).toHaveBeenCalledWith('candidate', JSON.stringify(candidates[0]))
  })
})
