import { createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { cleanup } from '@testing-library/vue'
import { afterEach, beforeEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
})

beforeEach(() => {
  const pinia = createPinia()
  createTestingPinia({ createSpy: vi.fn })
  return { pinia }
})
