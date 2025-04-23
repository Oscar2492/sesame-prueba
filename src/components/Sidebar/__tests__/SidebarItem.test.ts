import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SidebarItem from '../SidebarItem.vue'

describe('SidebarItem', () => {
  it('renders the label prop correctly', () => {
    const wrapper = mount(SidebarItem, {
      props: { label: 'Dashboard' },
    })

    const label = wrapper.get('[data-testid="sidebar-item-label"]')
    expect(label.text()).toBe('Dashboard')
  })
})
