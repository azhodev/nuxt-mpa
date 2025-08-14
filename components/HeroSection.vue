<script setup lang="ts">
import { MENU_DATA } from '~/data/menu';

const HeroVideo = defineAsyncComponent(() => import('~/components/HeroVideo.vue'))

const routeInfo = useRouteInfo()

const pageTitle = computed(() => {
  const current = MENU_DATA.find((item) => item.to === routeInfo.routePath)
  return current?.label || 'Page'
})

</script>

<template>
  <div
    id="hero-section"
    class="hero-section section-with-rounded-corners w-full transition-[height] duration-500 ease-in-out relative overflow-hidden"
    :class="routeInfo.isHomePage ? 'hero-expanded pt-30 lg:pt-0' : 'hero-collapsed pt-15'"
  >
    <HeroVideo />

    <div class="container h-full flex flex-col justify-center text-secondary">
      <div v-if="routeInfo.isHomePage" class="self-stretch flex flex-col justify-between min-h-8/10">
        <HeroContent />
        <div class="flex-1 border-l-divider"></div>
        <HeroStats />
      </div>

      <div v-else-if="!routeInfo.isHomePage" class="flex justify-center">
        <h1
          class="text-[clamp(2.5rem,14vw,5rem)] sm:text-[clamp(5rem,9vw,9rem)] text-accent font-serif text-center">
          {{ pageTitle }}
        </h1>
      </div>
    </div>

    <div class="corner-mask corner-mask-left"></div>
    <div class="corner-mask corner-mask-right"></div>
  </div>
</template>
