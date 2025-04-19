export function dateFormater(fecha?: Date | string): string {
  if (!fecha) return 'sin fecha'

  const date = new Date(fecha)
  if (isNaN(date.getTime())) return 'fecha inválida'

  const currentDate = new Date()
  const diffMs = currentDate.getTime() - date.getTime()
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  const isToday = currentDate.toDateString() === date.toDateString()

  const yesterday = new Date(currentDate)
  yesterday.setDate(currentDate.getDate() - 1)
  const isYesterday = yesterday.toDateString() === date.toDateString()

  if (isToday) return 'Hoy'
  if (isYesterday) return 'Ayer'
  if (diffDias <= 6) return 'Esta semana'
  if (diffDias <= 13) return 'Hace una semana'

  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
