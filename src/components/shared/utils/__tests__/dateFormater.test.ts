import { describe, expect, it } from 'vitest'
import { dateFormater } from '../dateFormater'

describe('dateFormater', () => {
  it('should return "sin fecha" when no argument is provided', () => {
    expect(dateFormater()).toBe('sin fecha')
  })

  it('should return "fecha inválida" for invalid date strings', () => {
    expect(dateFormater('invalid-date')).toBe('fecha inválida')
  })

  it('should return "Hoy" for the current date', () => {
    const today = new Date()
    expect(dateFormater(today)).toBe('Hoy')
  })

  it('should return "Ayer" for yesterday\'s date', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    expect(dateFormater(yesterday)).toBe('Ayer')
  })

  it('should return "Esta semana" for dates within the last 6 days (excluding today and yesterday)', () => {
    const dateWithinThisWeek = new Date()
    dateWithinThisWeek.setDate(dateWithinThisWeek.getDate() - 3)
    expect(dateFormater(dateWithinThisWeek)).toBe('Esta semana')
  })

  it('should return "Hace una semana" for dates 7 to 13 days ago', () => {
    const dateOneWeekAgo = new Date()
    dateOneWeekAgo.setDate(dateOneWeekAgo.getDate() - 7)
    expect(dateFormater(dateOneWeekAgo)).toBe('Hace una semana')
  })

  it('should return localized date string for dates more than 13 days ago', () => {
    const olderDate = new Date('2023-01-01')
    expect(dateFormater(olderDate)).toBe(
      olderDate.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    )
  })
})
