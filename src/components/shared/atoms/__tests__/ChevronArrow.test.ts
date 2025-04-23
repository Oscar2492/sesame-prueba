import { describe, expect, it } from 'vitest'
import ChevronArrow from '../ChevronArrow.vue'
import { mount } from '@vue/test-utils'

describe('ChevronArrow', () => {
  it('Should display the arrow', () => {
    const wrapper = mount(ChevronArrow, {
      props: {
        isOpen: true,
        color: 'neutral',
      },
    })
    expect(wrapper.find('[data-test-id="arrow-svg"]').exists()).toBe(true)
  })
  it('Props should work fine', () => {
    const wrapper = mount(ChevronArrow, {
      props: {
        isOpen: false,
        color: 'purple',
      },
    })
    const arrow = wrapper.find('[data-test-id="arrow-svg"]')

    expect(arrow.classes()).toContain('color-purple')
    expect(arrow.classes()).toContain('rotate-180')
  })
})
