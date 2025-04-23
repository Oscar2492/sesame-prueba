import { config } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createI18n } from 'vue-i18n'
import { cleanup } from '@testing-library/vue'
import { afterEach, beforeEach, vi } from 'vitest'
import en from '../src/i18n/locales/en-US.json'
import es from '../src/i18n/locales/es-ES.json'

afterEach(() => {
  cleanup()
})

beforeEach(() => {
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    stubActions: false,
  })

  const messages = {
    en,
    es,
  }

  const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
  })

  config.global.plugins = [pinia, i18n]
})
