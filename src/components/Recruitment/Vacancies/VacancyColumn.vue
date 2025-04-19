<script setup lang="ts">
import type { Candidate, VacancyStatus } from '@/Types'
import CandidatesCard from '@/components/Recruitment/Candidates/CandidatesCard.vue'
import { computed } from 'vue'
import iconNew from '@/assets/icons/icon-new.svg'
import iconInterview from '@/assets/icons/icon-interview.svg'
import iconHired from '@/assets/icons/icon-hired.svg'
import iconBan from '@/assets/icons/icon-ban.svg'
import { useCandidatesStore } from '@/stores/candidates.ts'

const props = defineProps<{
  column: VacancyStatus
  img: string
}>()

const candidatesStore = useCandidatesStore()
const candidates = computed(() => candidatesStore.filteredCandidates)

const Candidatesfilter = computed(() => {
  return candidates.value.filter((candidate: Candidate) => {
    return candidate.status?.id === props.column.id
  })
})

const background = computed(() => (Candidatesfilter.value.length ? 'bg-white' : 'bg-neutral'))
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

const allowDrop = (event: DragEvent) => {
  event.preventDefault()
}
</script>

<template>
  <div
    class="w-[296px] bg-neutral border border-gray-200 rounded-md text-center p-4"
    :class="background"
    @dragover="allowDrop"
    @drop="onDrop"
  >
    <div class="w-full h-1 rounded mb-1" :class="`bg-${props.img}`" />
    <div class="flex items-center gap-2 bg-gray text-gray-800 p-2 text-center">
      <img :src="icon" class="w-5 h-5" />
      <h2 class="text-base font-medium">{{ column.name }}</h2>
    </div>
    <CandidatesCard :candidates="Candidatesfilter" />
  </div>
</template>
