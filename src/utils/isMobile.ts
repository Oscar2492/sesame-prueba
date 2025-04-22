import { onMounted, onUnmounted, ref } from 'vue'

export function useIsMobile() {
  const isMobile = ref(false)
  const mediaQuery = window.matchMedia('(max-width: 768px)')

  const updateDeviceType = () => {
    isMobile.value = mediaQuery.matches
  }

  onMounted(() => {
    updateDeviceType()
    mediaQuery.addEventListener('change', updateDeviceType)
  })

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', updateDeviceType)
  })

  return { isMobile }
}
