import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CandidatesAdd from '../CandidatesAdd.vue'
import { nextTick } from 'vue'
import ModalBase from '../../../shared/molecules/ModalBase.vue'
import CandidateAddForm from '../CandidateAddForm.vue'

describe('CandidatesAdd', () => {
  it('render the button and the modal correctly and should close modal', async () => {
    const wrapper = mount(CandidatesAdd)

    expect(wrapper.find('[data-testid="candidate-add-container"]').exists()).toBe(true)
    const button = wrapper.find('[data-testid="open-candidate-form-button"]')
    expect(button.exists()).toBe(true)

    await button.trigger('click')
    await nextTick()

    const modal = wrapper.findComponent(ModalBase)
    expect(modal.exists()).toBe(true)
    const form = wrapper.findComponent(CandidateAddForm)
    expect(form.exists()).toBe(true)

    form.vm.$emit('close')
    await nextTick()

    expect(wrapper.findComponent(CandidateAddForm).exists()).toBe(false)
  })
})
