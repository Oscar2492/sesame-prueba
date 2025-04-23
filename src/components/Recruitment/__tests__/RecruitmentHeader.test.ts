import { mount } from '@vue/test-utils'
import RecruitmentHeader from '../RecruitmentHeader.vue'
import { describe, expect, it } from 'vitest'

describe('RecruitmentHeader', () => {
  it('renders tabs with correct text', () => {
    const wrapper = mount(RecruitmentHeader, {
      props: { selectedTab: 'vacancy' },
    })

    const vacancyTab = wrapper.find('[data-test-id="vacancy-tab"]')
    const candidateTab = wrapper.find('[data-test-id="candidate-tab"]')

    expect(vacancyTab.text()).toBe('Vacantes')
    expect(candidateTab.text()).toBe('Candidatos')
  })

  it('applies correct classes based on selected tab', () => {
    const wrapper = mount(RecruitmentHeader, {
      props: { selectedTab: 'vacancy' },
    })

    const vacancyTab = wrapper.find('[data-test-id="vacancy-tab"]')
    const candidateTab = wrapper.find('[data-test-id="candidate-tab"]')

    expect(vacancyTab.classes()).toContain('text-font-purple')
    expect(candidateTab.classes()).toContain('text-neutral')

    const wrapper2 = mount(RecruitmentHeader, {
      props: { selectedTab: 'candidate' },
    })

    const vacancyTab2 = wrapper2.find('[data-test-id="vacancy-tab"]')
    const candidateTab2 = wrapper2.find('[data-test-id="candidate-tab"]')

    expect(candidateTab2.classes()).toContain('text-font-purple')
    expect(vacancyTab2.classes()).toContain('text-neutral')
  })

  it('emits update:selectedTab event when clicking a tab', async () => {
    const wrapper = mount(RecruitmentHeader, {
      props: { selectedTab: 'vacancy' },
    })

    const candidateTab = wrapper.find('[data-test-id="candidate-tab"]')
    await candidateTab.trigger('click')

    expect(wrapper.emitted('update:selectedTab')).toBeTruthy()
    expect(wrapper.emitted('update:selectedTab')?.[0]).toEqual(['candidate'])

    const vacancyTab = wrapper.find('[data-test-id="vacancy-tab"]')
    await vacancyTab.trigger('click')

    expect(wrapper.emitted('update:selectedTab')?.[1]).toEqual(['vacancy'])
  })
})
