import { describe, expect, it } from 'vitest'
import { dateFormater } from '../dateFormater'

const mockT = (key: string) => {
  const dict: Record<string, string> = {
    'dates.noDate': 'Sin fecha',
    'dates.invalidDate': 'Fecha invalida',
    'dates.today': 'Hoy',
    'dates.yesterday': 'Ayer',
    'dates.thisWeek': 'Esta semana',
    'dates.lastWeek': 'Hace una semana',
  }
  return dict[key] || key
}

const mockLocale = 'es-ES'

describe('dateFormater', () => {
  it('should return "Sin fecha" when no argument is provided', () => {
    expect(dateFormater(undefined, mockT, mockLocale)).toBe('Sin fecha')
  })

  it('should return "Fecha invalida" for invalid date strings', () => {
    expect(dateFormater('invalid-date', mockT, mockLocale)).toBe('Fecha invalida')
  })

  it('should return "Hoy" for the current date', () => {
    const today = new Date()
    expect(dateFormater(today, mockT, mockLocale)).toBe('Hoy')
  })

  it('should return "Ayer" for yesterday\'s date', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    expect(dateFormater(yesterday, mockT, mockLocale)).toBe('Ayer')
  })

  it('should return "Esta semana" for dates within the last 6 days (excluding today and yesterday)', () => {
    const dateWithinThisWeek = new Date()
    dateWithinThisWeek.setDate(dateWithinThisWeek.getDate() - 3)
    expect(dateFormater(dateWithinThisWeek, mockT, mockLocale)).toBe('Esta semana')
  })

  it('should return "Hace una semana" for dates 7 to 13 days ago', () => {
    const dateOneWeekAgo = new Date()
    dateOneWeekAgo.setDate(dateOneWeekAgo.getDate() - 7)
    expect(dateFormater(dateOneWeekAgo, mockT, mockLocale)).toBe('Hace una semana')
  })

  it('should return localized date string for dates more than 13 days ago', () => {
    const olderDate = new Date('2023-01-01')
    expect(dateFormater(olderDate, mockT, mockLocale)).toBe(
      olderDate.toLocaleDateString(mockLocale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    )
  })
})
