<script setup lang="ts">
import type { MissionCard } from '~/types/cards';
const props = defineProps<MissionCard>()
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-6 items-center sm:items-end">
    <span class="flex shrink-0 bg-secondary w-30 h-30 rounded-full items-center justify-center">
      <NuxtImg
        :src="props.icon"
        class="w-15 h-15"
        :alt="props.title"
      />
    </span>
    <div class="self-center flex flex-col gap-4">
      <h3 class="font-serif text-[28px] font-normal">{{ props.title }}</h3>
      <p class="text-base/5 max-w-[365px]">{{ props.description }}</p>
    </div>
  </div>
</template>