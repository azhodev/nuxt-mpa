<script setup lang="ts">
import { STATS_DATA } from '~/data/stats'
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface AnimatedStat {
  target: number
  current: number | string
  description: string
  isAnimating: boolean
  isVisible: boolean
  el: Element | null
}

const animatedStats = ref<AnimatedStat[]>([])

function getRandomTwoDigitNumber() {
  return Math.floor(10 + Math.random() * 90)
}

function animateStat(stat: AnimatedStat, duration = 500, interval = 30) {
  stat.isAnimating = true
  const start = Date.now()

  const animation = setInterval(() => {
    const elapsed = Date.now() - start

    if (elapsed >= duration) {
      clearInterval(animation)
      stat.current = stat.target
      stat.isAnimating = false
    } else {
      stat.current = getRandomTwoDigitNumber()
    }
  }, interval)
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  animatedStats.value = STATS_DATA.map(stat => ({
    target: stat.value,
    current: 0,
    description: stat.description,
    isAnimating: false,
    isVisible: false,
    el: null,
  }))

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = animatedStats.value.findIndex(stat => stat.el === entry.target)
          const stat = animatedStats.value[index]

          if (stat && !stat.isVisible) {
            stat.isVisible = true
            animateStat(stat, 500, 30)
            observer?.unobserve(entry.target)
          }
        }
      }
    },
    { threshold: 0.5 }
  )

  // Подключение к DOM после рендера
  requestAnimationFrame(() => {
    animatedStats.value.forEach((stat, index) => {
      const el = document.querySelector(`[data-stat-index="${index}"]`)
      if (el) {
        stat.el = el
        observer?.observe(el)
      }
    })
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6 lg:pl-4 xl:pl-12 text-center text-white border-l-divider">
    <div
      v-for="(item, index) in animatedStats"
      :key="index"
      :data-stat-index="index"
      class="flex flex-col items-center odd:ml-20 even:mr-20 lg:odd:ml-0 lg:even:mr-0 transition-opacity duration-700 will-change-transform"
      :class="item.isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
      <div
        class="text-9xl font-serif transition-all duration-300 min-h-[130px]"
        :class="{ 'blur-xs scale-105': item.isAnimating }"
      >
        {{ item.current }}
      </div>
      <div class="text-2xl w-[220px] mt-2">{{ item.description }}</div>
    </div>
  </div>
</template>
