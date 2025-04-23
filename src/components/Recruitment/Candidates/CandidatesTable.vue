<script setup lang="ts">
import { useCandidatesStore } from '@/stores/candidates.ts'
import { computed } from 'vue'
import { dateFormater } from '../../shared/utils/dateFormater.ts'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const candidateStore = useCandidatesStore()
const statusTranslated = (col: string | undefined) => {
  if (!col) return '-'
  const key = `recruitment.header.columns.${col.toLowerCase().replace(/\s+/g, '')}`
  return t(key)
}
const candidates = computed(() => candidateStore.filteredCandidates)
</script>

<template>
  <div class="w-full overflow-x-auto" data-testid="candidates-table-container">
    <div
      class="text-font-purple border-neutral bg-neutral-background grid grid-cols-[1fr_1fr_1fr] gap-4 border-b p-4 font-semibold"
      data-testid="candidates-table-header"
    >
      <div data-testid="header-name">
        {{ t('recruitment.header.candidatesTable.name') }}
      </div>
      <div data-testid="header-date">
        {{ t('recruitment.header.candidatesTable.creationDate') }}
      </div>
      <div data-testid="header-vacancy">
        {{ t('recruitment.header.candidatesTable.vacancyName') }}
      </div>
    </div>

    <div
      v-for="candidate in candidates"
      :key="candidate.id"
      class="hover:bg-neutral-background border-neutral grid grid-cols-[1fr_1fr_1fr] gap-4 border-b p-4"
      data-testid="candidate-row"
    >
      <div data-testid="candidate-name">{{ `${candidate.firstName} ${candidate.lastName}` }}</div>
      <div data-testid="candidate-date">{{ dateFormater(candidate.createdAt, t, locale) }}</div>
      <div data-testid="candidate-vacancy">
        {{ statusTranslated(candidate.status?.name) || '-' }}
      </div>
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
