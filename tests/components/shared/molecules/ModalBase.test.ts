import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ModalBase from '../../../../src/components/shared/molecules/ModalBase.vue'

describe('ModalBase', () => {
  it('Should render the "content" slot content', () => {
    const wrapper = mount(ModalBase, {
      props: {
        isOpen: true,
      },
      slots: {
        content: 'Content Slot Content',
      },
    })
    expect(wrapper.text()).toContain('Content Slot Content')
  })
  it('Should not render the "content" slot content', () => {
    const wrapper = mount(ModalBase, {
      props: {
        isOpen: false,
      },
      slots: {
        content: 'Content Slot Content',
      },
    })
    expect(wrapper.text()).not.toContain('Content Slot Content')
  })
})
