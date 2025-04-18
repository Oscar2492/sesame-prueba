export const useApi = () => {
  const token: string = 'cf3851069b6ad0c13f365cda737b71e349c2ee94a9203d07930c23009eaeafdc'
  const baseUrl = 'https://api-test.sesametime.com'

  const request = async (url: string, options: RequestInit = {}) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    }

    const response = await fetch(baseUrl + url, {
      ...options,
      headers,
    })

    if (!response.ok) throw new Error(`Error ${response.status}`)

    return response.json()
  }

  return { request }
}
