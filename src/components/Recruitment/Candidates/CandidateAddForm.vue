<script setup lang="ts">
import { ref } from 'vue'
import SesameButton from '@/components/shared/atoms/sesame-button.vue'
import { useVacancyStore } from '@/stores/vacancy.ts'
import { useCandidatesStore } from '@/stores/candidates.ts'

const emit = defineEmits<{
  (event: 'close'): void
}>()
const vacancyStore = useVacancyStore()
const candidatesStore = useCandidatesStore()
const firstName = ref('')
const lastName = ref('')

const submitForm = () => {
  candidatesStore.addCandidates({
    firstName: firstName.value,
    lastName: lastName.value,
    vacancyId: vacancyStore.vacancyId,
    statusId: vacancyStore.statusNewId,
  })
  emit('close')
}
</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
      <input
        type="text"
        id="firstName"
        v-model="firstName"
        class="mt-1 w-full rounded-md border border-gray-300 p-2"
        placeholder="Enter first name"
        required
      />
    </div>

    <div>
      <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
      <input
        type="text"
        id="lastName"
        v-model="lastName"
        class="mt-1 w-full rounded-md border border-gray-300 p-2"
        placeholder="Enter last name"
        required
      />
    </div>
    <div class="flex items-center justify-around">
      <sesame-button label="Añadir" />
      <sesame-button type="button" label="Cancel" @click="$emit('close')" />
    </div>
  </form>
</template>
