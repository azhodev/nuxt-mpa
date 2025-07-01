<script setup lang="ts">
const routeInfo = useRouteInfo()

const { data: home } = await useAsyncData(() => queryCollection('content').path('/home').first())
console.log('home', home.value);

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
    class="relative w-full pb-30 lg:pb-0 bg-black/80 transition-[height] duration-500 ease-in-out overflow-hidden"
    :class="routeInfo.isHomePage ? 'hero-expanded' : 'hero-collapsed'"
  >
    <div class="container h-full flex flex-col justify-center items-end text-secondary pt-30 lg:pt-0">
      <div class="self-stretch flex flex-col">
        <HeroContent />
        <HeroStats />
      </div>
    </div>
  </div>
</template>

