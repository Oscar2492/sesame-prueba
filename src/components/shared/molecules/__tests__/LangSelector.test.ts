import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LangSelector from '../LangSelector.vue'

describe('LanguageSwitcher', () => {
  it('renders both language buttons', () => {
    const wrapper = mount(LangSelector)
    expect(wrapper.get('[data-testid="lang-es"]').text()).toBe('Es')
    expect(wrapper.get('[data-testid="lang-en"]').text()).toBe('En')
  })

  it('switches to Spanish when clicking "Es"', async () => {
    const wrapper = mount(LangSelector)
    const esButton = wrapper.get('[data-testid="lang-es"]')
    await esButton.trigger('click')
    expect(esButton.classes()).toContain('bg-font-purple')
  })

  it('switches to English when clicking "En"', async () => {
    const wrapper = mount(LangSelector)
    const enButton = wrapper.get('[data-testid="lang-en"]')
    await enButton.trigger('click')
    expect(enButton.classes()).toContain('bg-font-purple')
  })
})
