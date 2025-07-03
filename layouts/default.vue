<script setup>
const { isHomePage } = useRouteInfo()
</script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <LayoutHeader />
    <HeroSection :is-home-page="isHomePage" />
    <div class="bg-background lg:bg-transparent">
      <NuxtPage class="bg-background flex-1" />
    </div>
    <LayoutFooter />
  </div>
</template>