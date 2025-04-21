<script setup lang="ts">
import LabeledButton from '@/components/shared/atoms/LabeledButton.vue'
import { ref } from 'vue'
import CandidateAddForm from '@/components/Recruitment/Candidates/CandidateAddForm.vue'
import FadeTransition from '@/components/shared/transitions/FadeTransition.vue'
import ModalBase from '@/components/shared/molecules/ModalBase.vue'

const isFormOpen = ref<boolean>(false)
const openForm = () => (isFormOpen.value = true)
const closeForm = () => (isFormOpen.value = false)
</script>

<template>
  <div>
    <labeled-button label="Añadir candidato" @click="openForm" />
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
