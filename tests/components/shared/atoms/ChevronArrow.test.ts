import { describe, expect, it } from 'vitest'
import ChevronArrow from '../../../../src/components/shared/atoms/ChevronArrow.vue'
import { mount } from '@vue/test-utils'

describe('ChevronArrow', () => {
  it('Should display the arrow', () => {
    const wrapper = mount(ChevronArrow, {
      props: {
        isOpen: true,
        color: 'neutral',
      },
    })
    expect(wrapper.find('svg').exists()).toBe(true)
  })
  it('Props should work fine', () => {
    const wrapper = mount(ChevronArrow, {
      props: {
        isOpen: false,
        color: 'purple',
      },
    })
    expect(wrapper.find('svg').classes()).toContain('color-purple')
    expect(wrapper.find('svg').classes()).toContain('rotate-180')
  })
})
