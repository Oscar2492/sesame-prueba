<script setup lang="ts">
import SesameButton from '@/components/shared/atoms/sesame-button.vue'
import { ref } from 'vue'
import CandidateAddForm from '@/components/Recruitment/Candidates/CandidateAddForm.vue'
import FadeTransition from '@/components/shared/transitions/fade-transition.vue'
import SesameModal from '@/components/shared/molecules/sesame-modal.vue'

const isFormOpen = ref<boolean>(false)
const openForm = () => (isFormOpen.value = true)
const closeForm = () => (isFormOpen.value = false)
</script>

<template>
  <div>
    <sesame-button label="Añadir candidato" @click="openForm" />
    <div>
      <fade-transition :show="isFormOpen">
        <sesame-modal :is-open="isFormOpen">
          <template #content>
            <candidate-add-form @close="closeForm" />
          </template>
        </sesame-modal>
      </fade-transition>
    </div>
  </div>
</template>
