<script setup lang="ts">
import type { Candidate } from '@/Types'
import { dateFormater } from '../../shared/utils/dateFormater.ts'

const props = defineProps<{
  candidates: Candidate[]
}>()

const handleDragStart = (event: DragEvent, candidate: Candidate) => {
  event.dataTransfer?.setData('candidate', JSON.stringify(candidate))
}
</script>

<template>
  <div
    v-for="candidate in props.candidates"
    :key="candidate.id"
    class="border-neutral bg-neutral-background m-2 cursor-move rounded-xl border-1 px-2 py-3"
    draggable="true"
    @dragstart="(e) => handleDragStart(e, candidate)"
    data-testid="candidate-card"
  >
    <div
      class="flex w-full max-w-full items-center justify-between gap-2"
      data-testid="candidate-header"
    >
      <span class="text-primary block truncate font-semibold" data-testid="candidate-name">
        {{ candidate.firstName }} {{ candidate.lastName }}
      </span>
      <img
        src="@/assets/icons/icon-dots-vertical.svg"
        alt="dots vertical"
        data-testid="candidate-options"
      />
    </div>
    <div
      class="text-input-text flex items-center justify-start gap-1 text-xs"
      data-testid="candidate-date"
    >
      <img src="@/assets/icons/icon-clock.svg" alt="clock" data-testid="candidate-clock-icon" />
      {{ dateFormater(candidate?.createdAt) }}
    </div>
  </div>
</template>
