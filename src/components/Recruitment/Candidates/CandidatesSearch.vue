<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const props = defineProps<{
  label: string
  placeholder: string
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const filterValue = ref(props.modelValue)

const handleInputChange = () => {
  emit('update:modelValue', filterValue.value)
}
</script>

<template>
  <div class="outline-none flex flex-col space-y-2">
    <label :for="label" class="outline-none text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="filterValue"
      @input="handleInputChange"
      class="outline-none mt-1 p-3 border border-gray-300 rounded-md focus:outline-none"
    />
  </div>
</template>
