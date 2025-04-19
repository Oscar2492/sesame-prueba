<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue'

type Size = 's' | 'm' | 'l'

const props = defineProps<{
  placeholder: string
  modelValue: string
  height: Size
  width: Size
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
const sizeClasses = {
  height: {
    s: 'h-8',
    m: 'h-12',
    l: 'h-16',
  },
  width: {
    s: 'w-16',
    m: 'w-32',
    l: 'w-64',
  },
}
const heightClass = computed(() => sizeClasses.height[props.height] || sizeClasses.height.m)
const widthClass = computed(() => sizeClasses.width[props.width] || sizeClasses.width.m)

const filterValue = ref(props.modelValue)

const handleInputChange = () => {
  emit('update:modelValue', filterValue.value)
}
</script>

<template>
  <div class="flex items-center gap-2 px-3 border rounded-xl bg-input border-neutral mt-1">
    <img src="@/assets/icons/icon-search.svg" alt="Icono" class="w-4 h-4" />
    <input
      type="text"
      :placeholder="placeholder"
      v-model="filterValue"
      @input="handleInputChange"
      class="outline-none bg-transparent w-full py-2 text-input-text size-3.5"
      :class="[heightClass, widthClass]"
    />
  </div>
</template>
