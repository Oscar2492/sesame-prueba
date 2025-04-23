import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SidebarSection from '../SidebarSection.vue'

describe('SidebarSection', () => {
  it('renders the title passed as a prop', () => {
    const wrapper = mount(SidebarSection, {
      props: {
        title: 'Test Title',
      },
    })

    const titleElement = wrapper.find('[data-testid="sidebar-title"]')
    expect(titleElement.text()).toBe('Test Title')
  })

  it('toggles the content visibility when the header is clicked', async () => {
    const wrapper = mount(SidebarSection, {
      props: {
        title: 'Sample',
      },
    })

    const content = wrapper.find('[data-testid="sidebar-content"]')
    expect(content.exists()).toBe(true)

    const header = wrapper.find('[data-testid="sidebar-header"]')
    await header.trigger('click')

    expect(wrapper.find('[data-testid="sidebar-content"]').exists()).toBe(false)
  })

  it('shows the content by default', () => {
    const wrapper = mount(SidebarSection, {
      props: {
        title: 'Default Open',
      },
    })

    const content = wrapper.find('[data-testid="sidebar-content"]')
    expect(content.exists()).toBe(true)
  })
})
