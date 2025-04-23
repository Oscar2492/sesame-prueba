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
  <div
    data-test-id="tabs-container"
    class="border-neutral flex w-full items-center gap-12 border-b text-base font-bold"
  >
    <div
      data-test-id="vacancy-tab"
      class="relative cursor-pointer pb-4"
      :class="[
        props.selectedTab === 'vacancy'
          ? 'text-font-purple after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:rounded-[1px] after:bg-current'
          : 'text-neutral',
      ]"
      @click="selectTab('vacancy')"
    >
      Vacantes
    </div>
    <div
      data-test-id="candidate-tab"
      class="relative cursor-pointer pb-4"
      :class="[
        props.selectedTab === 'candidate'
          ? 'text-font-purple after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:rounded-[1px] after:bg-current'
          : 'text-neutral',
      ]"
      @click="selectTab('candidate')"
    >
      Candidatos
    </div>
  </div>
</template>
