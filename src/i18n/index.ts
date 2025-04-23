import { createI18n } from 'vue-i18n'
import en from './locales/en-US.json'
import es from './locales/es-ES.json'

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

export default i18n
