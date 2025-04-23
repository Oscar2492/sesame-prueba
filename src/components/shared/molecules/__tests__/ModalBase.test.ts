import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ModalBase from '../ModalBase.vue'

describe('ModalBase', () => {
  it('Should render both header and content slots when isOpen is true', () => {
    const wrapper = mount(ModalBase, {
      props: {
        isOpen: true,
      },
      slots: {
        header: 'Header Slot Content',
        content: 'Content Slot Content',
      },
    })

    const modalContainer = wrapper.find('[data-test-id="modal-container"]')
    const modalHeader = wrapper.find('[data-test-id="modal-header"]')
    const modalContent = wrapper.find('[data-test-id="modal-content"]')

    expect(modalContainer.exists()).toBe(true)
    expect(modalHeader.text()).toBe('Header Slot Content')
    expect(modalContent.text()).toBe('Content Slot Content')
  })

  it('Should not render the modal component when isOpen is false', () => {
    const wrapper = mount(ModalBase, {
      props: {
        isOpen: false,
      },
      slots: {
        header: 'Header Slot Content',
        content: 'Content Slot Content',
      },
    })

    const modalContainer = wrapper.find('[data-test-id="modal-container"]')
    expect(modalContainer.exists()).toBe(false)
  })

  it('Should render modal with empty header slot when only content is provided', () => {
    const wrapper = mount(ModalBase, {
      props: {
        isOpen: true,
      },
      slots: {
        content: 'Content Slot Content',
      },
    })

    const modalHeader = wrapper.find('[data-test-id="modal-header"]')
    const modalContent = wrapper.find('[data-test-id="modal-content"]')

    expect(modalHeader.exists()).toBe(true)
    expect(modalHeader.text()).toBe('')
    expect(modalContent.text()).toBe('Content Slot Content')
  })
})
