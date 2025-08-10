<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import { ref, onMounted } from 'vue'

defineProps<{ item: { title: string; image: string; specs: string[] } }>()

const showContent = ref(false)

// Генерация случайных ширин для скелетонов
const skeletonWidthClasses = [
  'w-1/2',
  'w-2/3',
  'w-3/4',
  'w-4/5',
  'w-5/6'
]

// Задержка перед показом контента (например, 500 мс)
const LOADING_DELAY = 800

onMounted(() => {
  setTimeout(() => {
    showContent.value = true
  }, LOADING_DELAY)
})
</script>

<template>
  <NuxtLink
    v-if="showContent"
    class="flex flex-col gap-3"
  >
    <!-- Изображение -->
    <div class="w-full sm:h-[298px] overflow-hidden rounded-xl">
      <NuxtPicture
        :src="item.image"
        class="w-full h-full object-cover"
        :alt="item.title"
        format="avif,webp,jpg,png"
        width="800"
        height="600"
        sizes="sm:100vw md:50vw lg:800px"
        loading="lazy"
      />
    </div>

    <!-- Заголовок и спецификации -->
    <div class="flex justify-between gap-3">
      <h2 class="text-3xl">{{ item.title }}</h2>
      <div
        class="space-y-1 bg-secondary text-secondary-foreground py-6 px-5.5 rounded-xl xs:space-y-2 xs:max-w-[300px]">
        <p
          v-for="(spec, i) in item.specs"
          :key="i"
          class="text-xs"
        >
          {{ spec }}
        </p>
      </div>
    </div>
  </NuxtLink>

  <!-- Скелетон -->
  <div
    v-else
    class="flex flex-col gap-3"
  >
    <Skeleton class="bg-gray-300 dark:bg-gray-800 w-full h-[298px] rounded-xl" />

    <div class="flex justify-between gap-3">
      <Skeleton class="bg-gray-300 dark:bg-gray-800 h-8 w-1/2" />
      <div class="py-6 px-5.5 rounded-xl xs:max-w-[300px] w-full">
        <Skeleton
          v-for="(spec, i) in item.specs"
          :key="i"
          class="bg-gray-300 dark:bg-gray-800 h-4 mb-2"
          :class="skeletonWidthClasses[i % skeletonWidthClasses.length]"
        />
      </div>
    </div>
  </div>
</template>