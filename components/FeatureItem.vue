<!-- components/FeatureItem.vue -->
<template>
  <div class="flex flex-col sm:flex-row gap-6 items-center sm:items-end">
    <span class="flex shrink-0 bg-secondary w-30 h-30 rounded-full items-center justify-center">
      <NuxtImg :src="icon" class="w-15 h-15" />
    </span>
    <div class="flex flex-col gap-4">
      <h3 class="font-serif text-[28px] font-normal">{{ title }}</h3>
      <p class="text-base/5 max-w-[365px]">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
