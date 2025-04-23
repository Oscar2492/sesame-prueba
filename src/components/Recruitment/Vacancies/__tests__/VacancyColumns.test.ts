import { describe, expect, it, vi } from 'vitest'
import VacancyColumns from '../VacancyColumns.vue'
import { mount } from '@vue/test-utils'
import VacancyColumn from '../VacancyColumn.vue'

vi.mock('@/stores/vacancy', () => {
  return {
    useVacancyStore: vi.fn(() => ({
      vacancyStatus: [
        { id: '1', name: 'Vacante 1' },
        { id: '2', name: 'Vacante 2' },
        { id: '3', name: 'Vacante 3' },
      ],
    })),
  }
})
describe('VacancyColumns', () => {
  it('Render same columns like Vacancies length', () => {
    const wrapper = mount(VacancyColumns)
    const columns = wrapper.findAllComponents(VacancyColumn)
    expect(columns.length).toBe(3)
  })
})
