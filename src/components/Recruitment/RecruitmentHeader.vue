<script setup lang="ts">
const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['update:selectedTab'])

function selectTab(tab: 'vacancy' | 'candidate') {
  emit('update:selectedTab', tab)
}
</script>

<template>
  <div class="flex items-center w-full gap-12 text-base font-bold border-b border-neutral">
    <div
      class="relative cursor-pointer pb-4"
      :class="props.selectedTab === 'vacancy' ? 'text-font-purple underline-tab' : 'text-neutral'"
      @click="selectTab('vacancy')"
    >
      Vacantes
    </div>
    <div
      class="relative cursor-pointer pb-4"
      :class="props.selectedTab === 'candidate' ? 'text-font-purple underline-tab' : 'text-neutral'"
      @click="selectTab('candidate')"
    >
      Candidatos
    </div>
  </div>
</template>

<style scoped>
.underline-tab::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 1px;
}
</style>
