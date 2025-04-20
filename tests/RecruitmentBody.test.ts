import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RecruitmentPage from '../src/views/RecruitmentBody.vue'

vi.mock('@/assets/images/shurperro.png', () => ({
  default: 'mocked-image.png',
}))

vi.mock('../src/components/Sidebar/SidebarMenu.vue', () => ({
  default: { template: '<div data-testid="sidebar-menu" />' },
}))
vi.mock('../src/components/Recruitment/RecruitmentCard.vue', () => ({
  default: { template: '<div data-testid="recruitment-card" />' },
}))

describe('RecruitmentPage', () => {
  it('renderiza título e imagen', () => {
    const wrapper = mount(RecruitmentPage)
    expect(wrapper.find('h1').text()).toBe('Reclutamiento')
    expect(wrapper.find('img').attributes('src')).toBe('mocked-image.png')
  })

  it('renderiza subcomponentes', () => {
    const wrapper = mount(RecruitmentPage)
    expect(wrapper.find('[data-testid="sidebar-menu"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="recruitment-card"]').exists()).toBe(true)
  })
})
