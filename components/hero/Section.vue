<script setup lang="ts">
import { MENU_DATA } from '~/data/menu';
const routeInfo = useRouteInfo()

const { data: home } = await useAsyncData(() => queryCollection('content').path('/home').first())
console.log('home', home.value);

const pageTitle = computed(() => {
  const current = MENU_DATA.find((item) => item.to === routeInfo.routePath)
  return current?.label || 'Page'
})

onMounted(() => {
  const header = document.getElementById('layout-header')
  const hero = document.getElementById('hero-section')

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        header?.classList.add('fixed-header')
      } else {
        header?.classList.remove('fixed-header')
      }
    },
    { threshold: 0.1 }
  )

  if (hero) observer.observe(hero)
})
</script>

<template>
  <div
    id="hero-section"
    class="w-full bg-black/80 transition-[height] duration-500 ease-in-out overflow-hidden"
    :class="routeInfo.isHomePage ? 'hero-expanded pt-30 lg:pt-0' : 'hero-collapsed pt-15'"
  >
    <LayoutSiteVideo />

    <div class="container h-full flex flex-col justify-center items-end text-secondary">
      <div class="self-stretch flex flex-col">
        <div v-if="routeInfo.isHomePage">
          <HeroContent />
          <HeroStats />
        </div>

        <div v-else-if="!routeInfo.isHomePage">
          <div class="flex justify-center">
            <h1 class="text-[clamp(2.5rem,14vw,5rem)] sm:text-[clamp(5rem,9vw,9rem)] text-accent font-serif text-center">
              {{ pageTitle }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
