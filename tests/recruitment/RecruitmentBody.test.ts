import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

vi.mock('@/assets/images/shurperro.png', () => ({
  default: 'mocked-image.png',
}))
vi.mock('@/assets/icons/icon-burger.svg', () => ({
  default: 'mocked-burger-icon.svg',
}))

vi.mock('@/components/Sidebar/SidebarMenu.vue', () => ({
  default: {
    template: '<div data-testid="sidebar-menu" />',
  },
}))
vi.mock('@/components/Recruitment/RecruitmentCard.vue', () => ({
  default: {
    template: '<div data-testid="recruitment-card" />',
  },
}))
vi.mock('@/components/shared/transitions/slide-transition.vue', () => ({
  default: {
    props: ['show'],
    template: '<div data-testid="slide-transition"><slot /></div>',
  },
}))

const mockUseIsMobile = (isMobile: boolean) => {
  vi.doMock('@/utils/isMobile', () => ({
    useIsMobile: () => ({
      isMobile,
    }),
  }))
}

describe('RecruitmentPage', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  it('renderiza correctamente en modo escritorio', async () => {
    mockUseIsMobile(false)
    const wrapper = mount((await import('../../src/views/RecruitmentBody.vue')).default)

    expect(wrapper.find('h1').text()).toBe('Reclutamiento')
    expect(wrapper.find('img[alt="shurperro"]').attributes('src')).toBe('mocked-image.png')
    expect(wrapper.find('[data-testid="sidebar-menu"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="recruitment-card"]').exists()).toBe(true)
    expect(wrapper.find('img[alt="menu"]').exists()).toBe(false)
  })

  it('muestra icono de menú y cambia estado al hacer clic en modo móvil', async () => {
    mockUseIsMobile(true)
    const wrapper = mount((await import('../../src/views/RecruitmentBody.vue')).default)

    const menuIcon = wrapper.find('img[alt="menu"]')
    expect(menuIcon.exists()).toBe(true)

    await menuIcon.trigger('click')

    expect(wrapper.find('[data-testid="slide-transition"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="sidebar-menu"]').exists()).toBe(true)
  })
})
