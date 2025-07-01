<script setup>
const { isHomePage } = useRouteInfo()
</script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <LayoutSiteVideo />
    <LayoutHeader />
    <HeroSection :is-home-page="isHomePage" />
    <NuxtPage class="bg-background flex-1" />
    <LayoutFooter />
  </div>
</template>