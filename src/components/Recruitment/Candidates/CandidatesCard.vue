<script setup lang="ts">
import type { Candidate } from '@/Types'

const props = defineProps<{
  candidates: Candidate[]
}>()
</script>

<template>
  <div v-for="candidate in props.candidates" :key="candidate.firstName">
    {{ candidate.firstName }} {{ candidate.lastName }}
  </div>
</template>
