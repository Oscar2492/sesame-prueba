import { describe, expect, it } from 'vitest'
import LabeledButton from '../LabeledButton.vue'
import { mount } from '@vue/test-utils'

describe('LabeledButton', () => {
  it('Should display the button and the prop', () => {
    const wrapper = mount(LabeledButton, {
      props: {
        label: 'label',
      },
    })

    const button = wrapper.find('[data-test-id="primary-button"]')
    expect(button.text()).toBe('label')
  })
})
