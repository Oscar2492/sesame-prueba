import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RecruitmentBody from '../../../src/views/RecruitmentBody.vue'

vi.mock('@/assets/images/shurperro.png', () => ({
  default: 'mocked-image.png',
}))

vi.mock('@/assets/icons/icon-burger.svg', () => ({
  default: 'mocked-burger-icon.svg',
}))

const mockUseIsMobile = (isMobile: boolean) => {
  vi.doMock('@/utils/isMobile', () => ({
    useIsMobile: () => ({ isMobile }),
  }))
}

describe('RecruitmentPage', () => {
  it('renders correctly in desktop mode', () => {
    mockUseIsMobile(false)
    const wrapper = mount(RecruitmentBody)

    expect(wrapper.find('h1').text()).toBe('Reclutamiento')
    expect(wrapper.find('img[alt="shurperro"]').attributes('src')).toBe('mocked-image.png')
    expect(wrapper.find('img[alt="menu"]').exists()).toBe(false)
  })

  it('renders menu icon in mobile mode', () => {
    mockUseIsMobile(true)
    const wrapper = mount(RecruitmentBody)

    const menuIcon = wrapper.find('img[alt="menu"]')
    expect(menuIcon.exists()).toBe(true)
  })
})
