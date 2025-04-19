<script setup lang="ts">
import type { Candidate } from '@/Types'

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
    class="border-2 m-2 p-2 bg-white cursor-move"
    draggable="true"
    @dragstart="(e) => handleDragStart(e, candidate)"
  >
    {{ candidate.firstName }} {{ candidate.lastName }}
  </div>
</template>
