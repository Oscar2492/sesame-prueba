<script setup lang="ts">
import SesameButton from '@/components/shared/sesame-button.vue'
import { ref } from 'vue'
import CandidateAddForm from '@/components/Recruitment/Candidates/CandidateAddForm.vue'
import FadeTransition from '@/components/shared/fade-transition.vue'

const isFormOpen = ref<boolean>(false)
const openForm = () => (isFormOpen.value = true)
const closeForm = () => (isFormOpen.value = false)
</script>

<template>
  <div>
    <sesame-button label="Añadir candidato" @click="openForm" />
    <div>
      <fade-transition>
        <candidate-add-form v-if="isFormOpen" @close="closeForm" />
      </fade-transition>
    </div>
  </div>
</template>
