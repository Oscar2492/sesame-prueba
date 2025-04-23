import { describe, expect, it, vi } from 'vitest'
import CandidatesCard from '../CandidatesCard.vue'
import { mount } from '@vue/test-utils'
import { fireEvent } from '@testing-library/vue'

describe('CandidatesCard', () => {
  it('renders the correct number of of candidates', () => {
    const wrapper = mount(CandidatesCard, {
      props: {
        candidates: [
          { firstName: 'Oscar', lastName: 'Roza', status: { id: 1 } },
          { firstName: 'Beltran', lastName: 'Garcia', status: { id: 1 } },
        ],
      },
    })
    const cards = wrapper.findAll('[data-testid="candidate-name"]')
    expect(cards.length).toBe(2)
  })

  it('render the correct candidate', () => {
    const wrapper = mount(CandidatesCard, {
      props: {
        candidates: [{ firstName: 'Oscar', lastName: 'Roza', status: { id: 1 } }],
      },
    })
    const candidateName = wrapper.find('[data-testid="candidate-name"]')
    expect(candidateName.text()).toContain('Oscar')
  })

  it('transfer candidate when is dragged', async () => {
    const wrapper = mount(CandidatesCard, {
      props: {
        candidates: [{ firstName: 'Oscar', lastName: 'Roza', status: { id: 1 } }],
      },
    })
    const candidateEl = wrapper.find('[data-testid="candidate-card"]')
    const setData = vi.fn()
    const mockEvent = { dataTransfer: { setData } }

    await fireEvent.dragStart(candidateEl.element, mockEvent)

    expect(setData).toHaveBeenCalledWith(
      'candidate',
      JSON.stringify({
        firstName: 'Oscar',
        lastName: 'Roza',
        status: { id: 1 },
      }),
    )
  })
})
