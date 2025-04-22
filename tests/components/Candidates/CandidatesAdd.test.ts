import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CandidatesAdd from '../../../src/components/Recruitment/Candidates/CandidatesAdd.vue'
import LabeledButton from '../../../src/components/shared/atoms/LabeledButton.vue'
import CandidateAddForm from '../../../src/components/Recruitment/Candidates/CandidateAddForm.vue'
import { nextTick } from 'vue'

describe('CandidatesAdd', () => {
  it('render the button and the modal correctly and should close modal', async () => {
    const wrapper = mount(CandidatesAdd)
    const button = wrapper.findComponent(LabeledButton)
    expect(button.exists()).toBe(true)
    await button.trigger('click')
    await nextTick()
    expect(wrapper.findComponent(CandidateAddForm).exists()).toBe(true)
    const form = wrapper.findComponent(CandidateAddForm)
    expect(form.exists()).toBe(true)
    form.vm.$emit('close')
    await nextTick()
    expect(wrapper.findComponent(CandidateAddForm).exists()).toBe(false)
  })
})
