<script setup lang="ts">
import LabeledButton from '@/components/shared/atoms/LabeledButton.vue'
import { ref } from 'vue'
import CandidateAddForm from '@/components/Recruitment/Candidates/CandidateAddForm.vue'
import FadeTransition from '@/components/shared/transitions/FadeTransition.vue'
import ModalBase from '@/components/shared/molecules/ModalBase.vue'
import { useI18n } from 'vue-i18n'

const isFormOpen = ref<boolean>(false)
const openForm = () => (isFormOpen.value = true)
const closeForm = () => (isFormOpen.value = false)
const { t } = useI18n()
</script>

<template>
  <div data-testid="candidate-add-container">
    <labeled-button
      :label="t('buttons.addCandidate')"
      @click="openForm"
      data-testid="open-candidate-form-button"
    />
    <div>
      <fade-transition :show="isFormOpen">
        <modal-base :is-open="isFormOpen">
          <template #content>
            <candidate-add-form @close="closeForm" />
          </template>
        </modal-base>
      </fade-transition>
    </div>
  </div>
</template>
