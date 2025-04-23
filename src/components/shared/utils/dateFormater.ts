export function dateFormater(
  fecha?: Date | string,
  t: (key: string) => string = (s) => s,
  locale: string = 'es-ES',
): string {
  if (!fecha) return t('dates.noDate')

  const date = new Date(fecha)
  if (isNaN(date.getTime())) return t('dates.invalidDate')

  const currentDate = new Date()
  const diffMs = currentDate.getTime() - date.getTime()
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  const isToday = currentDate.toDateString() === date.toDateString()

  const yesterday = new Date(currentDate)
  yesterday.setDate(currentDate.getDate() - 1)
  const isYesterday = yesterday.toDateString() === date.toDateString()

  if (isToday) return t('dates.today')
  if (isYesterday) return t('dates.yesterday')
  if (diffDias <= 6) return t('dates.thisWeek')
  if (diffDias <= 13) return t('dates.lastWeek')

  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
