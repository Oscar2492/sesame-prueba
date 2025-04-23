<script setup lang="ts">
import { useCandidatesStore } from '@/stores/candidates.ts'
import { computed } from 'vue'
import { dateFormater } from '../../shared/utils/dateFormater.ts'

const candidateStore = useCandidatesStore()
const candidates = computed(() => candidateStore.filteredCandidates)
</script>

<template>
  <div class="w-full overflow-x-auto" data-testid="candidates-table-container">
    <div
      class="text-font-purple border-neutral bg-neutral-background grid grid-cols-[1fr_1fr_1fr] gap-4 border-b p-4 font-semibold"
      data-testid="candidates-table-header"
    >
      <div data-testid="header-name">Nombre del candidato</div>
      <div data-testid="header-date">Fecha de creación</div>
      <div data-testid="header-vacancy">Nombre de la vacante</div>
    </div>

    <div
      v-for="candidate in candidates"
      :key="candidate.id"
      class="hover:bg-neutral-background border-neutral grid grid-cols-[1fr_1fr_1fr] gap-4 border-b p-4"
      data-testid="candidate-row"
    >
      <div data-testid="candidate-name">{{ `${candidate.firstName} ${candidate.lastName}` }}</div>
      <div data-testid="candidate-date">{{ dateFormater(candidate.createdAt) }}</div>
      <div data-testid="candidate-vacancy">{{ candidate.status?.name || '-' }}</div>
    </div>

    <div
      v-if="!candidates.length"
      class="text-input-text p-4 text-center"
      data-testid="no-candidates-message"
    >
      No hay candidatos disponibles.
    </div>
  </div>
</template>
