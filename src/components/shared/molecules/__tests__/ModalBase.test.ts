import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ModalBase from '../ModalBase.vue'

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
    const modalContent = wrapper.find('[data-test-id="modal-content"]')
    expect(modalContent.text()).toBe('Content Slot Content')
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
    expect(wrapper.find('[data-test-id="modal-content"]').exists()).toBe(false)
  })
})
