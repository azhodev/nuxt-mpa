import { defineStore } from 'pinia'

// stores/useRouteInfo.ts
export const useRouteInfo = defineStore('routeInfo', () => {
  const route = useRoute()
  const isHomePage = computed(() => route.name === 'index')

  return { isHomePage }
})
