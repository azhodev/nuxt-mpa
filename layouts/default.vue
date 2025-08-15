<script setup>
const AppFooter = defineAsyncComponent(() => import('~/components/AppFooter.vue'))
const AppHeader = defineAsyncComponent(() => import('~/components/AppHeader.vue'))
const { isHomePage } = useRouteInfo()
</script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <AppHeader />

    <HeroSection :is-home-page="isHomePage" />
    <main class="bg-background min-h-screen flex flex-col align-middle flex-1">
      <slot />
    </main>
    
    <AppFooter />
  </div>
</template>