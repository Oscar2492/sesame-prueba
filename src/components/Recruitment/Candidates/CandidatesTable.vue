<script setup lang="ts">
import { useCandidatesStore } from '@/stores/candidates.ts'
import { computed } from 'vue'
import { dateFormater } from '../../shared/utils/dateFormater.ts'

const candidateStore = useCandidatesStore()
const candidates = computed(() => candidateStore.filteredCandidates)
</script>

<template>
  <div class="w-full overflow-x-auto">
    <div
      class="text-font-purple border-neutral bg-neutral-background grid grid-cols-[1fr_1fr_1fr] gap-4 border-b p-4 font-semibold"
    >
      <div>Nombre de la vacante</div>
      <div>Nombre del candidato</div>
      <div>Fecha de creación</div>
    </div>

    <div
      v-for="candidate in candidates"
      :key="candidate.id"
      class="hover:bg-neutral-background border-neutral grid grid-cols-[1fr_1fr_1fr] gap-4 border-b p-4"
    >
      <div>{{ `${candidate.firstName} ${candidate.lastName}` }}</div>
      <div>{{ dateFormater(candidate.createdAt) }}</div>
      <div>{{ candidate.status?.name || 'N/A' }}</div>
    </div>

    <div v-if="!candidates.length" class="text-input-text p-4 text-center">
      No hay candidatos disponibles.
    </div>
  </div>
</template>
