<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <div class="flex gap-2" data-testid="language-switcher">
    <button
      @click="changeLanguage('es')"
      :class="{
        'bg-font-purple text-white': locale === 'es',
        'bg-neutral text-gray-700': locale !== 'es',
      }"
      class="hover:bg-hired rounded-full px-4 py-1.5 transition-all duration-300 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
      data-testid="lang-es"
    >
      Es
    </button>
    <button
      @click="changeLanguage('en')"
      :class="{
        'bg-font-purple text-white': locale === 'en',
        'bg-neutral text-gray-700': locale !== 'en',
      }"
      class="hover:bg-hired rounded-full px-4 py-1.5 transition-all duration-300 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
      data-testid="lang-en"
    >
      En
    </button>
  </div>
</template>
