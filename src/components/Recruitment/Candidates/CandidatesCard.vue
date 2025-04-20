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
    class="border-1 border-neutral rounded-xl m-2 px-2 py-3 bg-neutral-background cursor-move"
    draggable="true"
    @dragstart="(e) => handleDragStart(e, candidate)"
  >
    <div class="flex items-center justify-between gap-2 w-full max-w-full">
      <span class="truncate font-semibold text-primary block">
        {{ candidate.firstName }} {{ candidate.lastName }}
      </span>
      <img src="@/assets/icons/icon-dots-vertical.svg" alt="dots vertical" />
    </div>
    <div class="flex items-center justify-start gap-1 text-input-text text-xs">
      <img src="@/assets/icons/icon-clock.svg" alt="clock" />
      {{ dateFormater(candidate?.createdAt) }}
    </div>
  </div>
</template>
