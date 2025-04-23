<script setup lang="ts">
import type { Candidate, VacancyStatus } from '@/Types'
import CandidatesCard from '@/components/Recruitment/Candidates/CandidatesCard.vue'
import { computed } from 'vue'
import iconNew from '@/assets/icons/icon-new.svg'
import iconInterview from '@/assets/icons/icon-interview.svg'
import iconHired from '@/assets/icons/icon-hired.svg'
import iconBan from '@/assets/icons/icon-ban.svg'
import { useCandidatesStore } from '@/stores/candidates.ts'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps<{
  column: VacancyStatus
  img: string
}>()

const candidatesStore = useCandidatesStore()
const candidates = computed(() => candidatesStore.filteredCandidates)

const candidatesfilter = computed(() => {
  return candidates.value.filter((candidate: Candidate) => candidate.status?.id === props.column.id)
})

const background = computed(() =>
  candidatesfilter.value.length ? 'bg-white' : 'bg-neutral-background',
)
const iconsMap: Record<string, string> = {
  new: iconNew,
  interview: iconInterview,
  hired: iconHired,
  ban: iconBan,
}

const icon = computed(() => iconsMap[props.img])

const onDrop = (event: DragEvent) => {
  event.preventDefault()
  const candidateData = event.dataTransfer?.getData('candidate')
  if (candidateData) {
    const candidate = JSON.parse(candidateData)
    candidatesStore.updateCandidate({
      id: candidate.id,
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      vacancyId: candidate.vacancyId,
      statusId: props.column.id,
    })
  }
}
const colTransalted = (col: string) => {
  const key = `recruitment.header.columns.${col.toLowerCase().replace(/\s+/g, '')}`
  return t(key)
}
const allowDrop = (event: DragEvent) => {
  event.preventDefault()
}
</script>

<template>
  <div
    :data-testid="`vacancy-status-${props.column.name.toLowerCase()}`"
    class="scroll-custom min-w-[18.5rem] overflow-x-hidden overflow-y-auto rounded-md border border-gray-200 p-4 text-center"
    :class="background"
    @dragover="allowDrop"
    @drop="onDrop"
  >
    <div class="mb-1 h-1 w-full rounded" :class="`bg-${props.img}`" />
    <div
      :data-testid="`vacancy-status-header-${props.column.name.toLowerCase()}`"
      class="bg-gray flex items-center gap-2 p-2 text-center text-gray-800"
    >
      <img :src="icon" class="h-5 w-5" :data-testid="`vacancy-status-icon-${props.img}`" alt="" />
      <h2 class="text-base font-medium">
        {{ colTransalted(column.name) }}
      </h2>
    </div>
    <CandidatesCard :candidates="candidatesfilter" />
  </div>
</template>
