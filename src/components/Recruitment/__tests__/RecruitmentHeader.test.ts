import { mount } from '@vue/test-utils'
import RecruitmentHeader from '../RecruitmentHeader.vue'
import { describe, expect, it } from 'vitest'

describe('RecruitmentHeader', () => {
  it('renders tabs and emits event on click', async () => {
    const wrapper = mount(RecruitmentHeader, {
      props: { selectedTab: 'vacancy' },
    })

    const vacancyTab = wrapper.find('[data-test-id="vacancy-tab"]')
    const candidateTab = wrapper.find('[data-test-id="candidate-tab"]')

    expect(vacancyTab.text()).toBe('Vacantes')
    expect(candidateTab.text()).toBe('Candidatos')

    await candidateTab.trigger('click')
    expect(wrapper.emitted('update:selectedTab')?.[0]).toEqual(['candidate'])
  })
})
