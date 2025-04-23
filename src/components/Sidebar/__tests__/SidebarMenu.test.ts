import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SidebarMenu from '../SidebarMenu.vue'

describe('SidebarMenu', () => {
  it('renders the sidebar with the logo', () => {
    const wrapper = mount(SidebarMenu)
    const sidebar = wrapper.find('[data-testid="sidebar"]')
    const logo = wrapper.find('[data-testid="logo-image"]')

    expect(sidebar.exists()).toBe(true)
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('alt')).toBe('Sesame Logo')
  })

  it('toggles the admin section when clicked', async () => {
    const wrapper = mount(SidebarMenu)
    const toggle = wrapper.find('[data-testid="sidebar-menu-toggle"]')
    const talentSection = wrapper.find('[data-testid="sidebar-menu-section"]')

    expect(talentSection.exists()).toBe(true)
    await toggle.trigger('click')

    expect(wrapper.find('[data-testid="sidebar-menu-section"]').exists()).toBe(false)
    await toggle.trigger('click')

    expect(wrapper.find('[data-testid="sidebar-menu-section"]').exists()).toBe(true)
  })

  it('renders the SidebarSection with the correct title and icon', () => {
    const wrapper = mount(SidebarMenu)
    const talentSection = wrapper.find('[data-testid="sidebar-menu-section"]')
    const talentIcon = wrapper.find('[data-testid="sidebar-menu-icon"]')

    expect(talentSection.exists()).toBe(true)
    expect(talentIcon.exists()).toBe(true)
    expect(talentIcon.attributes('alt')).toBe('Star icon')
  })
})
