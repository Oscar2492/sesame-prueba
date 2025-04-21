import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import LabeledInput from '../../../../src/components/shared/atoms/LabeledInput.vue'

describe('LabeledInput.vue', () => {
  it('renders the placeholder', () => {
    const wrapper = mount(LabeledInput, {
      props: {
        placeholder: 'Search...',
        modelValue: '',
        height: 'm',
        width: 'm',
      },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Search...')
  })

  it('applies correct size classes', () => {
    const wrapper = mount(LabeledInput, {
      props: {
        placeholder: '',
        modelValue: '',
        height: 'l',
        width: 's',
      },
    })
    const input = wrapper.find('input')
    expect(input.classes()).toContain('h-16')
    expect(input.classes()).toContain('w-16')
  })

  it('emits modelValue update on input', async () => {
    const wrapper = mount(LabeledInput, {
      props: {
        placeholder: '',
        modelValue: '',
        height: 'm',
        width: 'm',
      },
    })
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
  })
})
