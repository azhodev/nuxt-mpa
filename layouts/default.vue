<script setup>
const LayoutFooter = defineAsyncComponent(() => import('~/components/LayoutFooter.vue'))
const LayoutHeader = defineAsyncComponent(() => import('~/components/LayoutHeader.vue'))
const { isHomePage } = useRouteInfo()
</script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <LayoutHeader />

    <HeroSection :is-home-page="isHomePage" />
    <main class="bg-background min-h-screen flex flex-col align-middle flex-1">
      <slot />
    </main>
    
    <LayoutFooter />
  </div>
</template>