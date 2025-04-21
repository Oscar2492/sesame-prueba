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

const textValue = ref(props.modelValue)

const handleInputChange = () => {
  emit('update:modelValue', textValue.value)
}
</script>

<template>
  <div class="bg-input border-neutral mt-1 flex items-center gap-2 rounded-xl border px-3">
    <img src="@/assets/icons/icon-search.svg" alt="Icono" class="h-4 w-4" />
    <input
      type="text"
      :placeholder="placeholder"
      v-model="textValue"
      @input="handleInputChange"
      class="text-input-text size-3.5 w-full bg-transparent py-2 outline-none"
      :class="[heightClass, widthClass]"
    />
  </div>
</template>
