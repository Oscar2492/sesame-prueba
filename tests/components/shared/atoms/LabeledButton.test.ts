import { describe, expect, it } from 'vitest'
import LabeledButton from '../../../../src/components/shared/atoms/LabeledButton.vue'
import { mount } from '@vue/test-utils'

describe('LabeledButton', () => {
  it('Should display the button and the prop', () => {
    const wrapper = mount(LabeledButton, {
      props: {
        label: 'label',
      },
    })
    expect(wrapper.find('button').text()).toBe('label')
  })
})
