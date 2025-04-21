import { describe, expect, it } from 'vitest'
import CandidatesCard from '../../../src/components/Recruitment/Candidates/CandidatesCard.vue'
import { mount } from '@vue/test-utils'

describe('CandidatesCard', () => {
  it('Should display and array of candidates', () => {
    const wrapper = mount(CandidatesCard, {
      props: {
        candidates: [
          { firstName: 'Oscar', lastName: 'Roza', status: { id: 1 } },
          { firstName: 'Beltran', lastName: 'Garcia', status: { id: 1 } },
        ],
      },
    })
    const cards = wrapper.findAll('span.truncate')
    console.log(cards)
    expect(cards.length).toBe(2)
  })
})
