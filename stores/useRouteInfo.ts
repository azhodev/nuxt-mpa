import { defineStore } from 'pinia'

// stores/useRouteInfo.ts
export const useRouteInfo = defineStore('routeInfo', () => {
  const route = useRoute()
  const isHomePage = computed(() => route.name === 'index')
  const routePath = computed(() => route.path)

  return { isHomePage, routePath }
})
