// composables/useImageLoaded.ts
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useImageLoaded(src: string) {
  const loaded = ref(false)

  let img: HTMLImageElement | null = null

  onMounted(() => {
    img = new Image()
    img.src = src
    if (img.complete) {
      loaded.value = true
    } else {
      img.addEventListener('load', () => (loaded.value = true))
      img.addEventListener('error', () => (loaded.value = false))
    }
  })

  onBeforeUnmount(() => {
    img?.removeEventListener('load', () => { })
    img?.removeEventListener('error', () => { })
  })

  return { loaded }
}

