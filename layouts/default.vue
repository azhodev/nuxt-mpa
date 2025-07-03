<script setup>
const LayoutFooter = defineAsyncComponent(() => import('~/components/layout/Footer.vue'))
const LayoutHeader = defineAsyncComponent(() => import('~/components/layout/Header.vue'))
const { isHomePage } = useRouteInfo()
</script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <LayoutHeader />
    <HeroSection :is-home-page="isHomePage" />
    <div class="bg-background">
      <NuxtPage class="bg-background flex-1" />
    </div>
    <LayoutFooter />
  </div>
</template>