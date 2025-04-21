import { mount } from '@vue/test-utils'
import RecruitmentHeader from '../../../src/components/Recruitment/RecruitmentHeader.vue'
import { describe, expect, it } from 'vitest'

describe('RecruitmentHeader', () => {
  it('renders tabs and emits event on click', async () => {
    const wrapper = mount(RecruitmentHeader, {
      props: { selectedTab: 'vacancy' },
    })

    expect(wrapper.text()).toContain('Vacantes')
    expect(wrapper.text()).toContain('Candidatos')

    await wrapper.findAll('div.cursor-pointer')[1].trigger('click')
    expect(wrapper.emitted('update:selectedTab')?.[0]).toEqual(['candidate'])
  })
})
