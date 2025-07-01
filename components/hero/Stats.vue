<script setup lang="ts">
import { STATS_DATA } from '~/data/stats'
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6 lg:pt-[270px] lg:pl-4 xl:pl-12 text-center text-white border-l-divider flex-1 ">
    <div
      v-for="(item, index) in STATS_DATA"
      :key="index"
      class="flex flex-col items-center"
    >
      <div class="text-9xl font-serif">{{ item.value }}</div>
      <div class="text-2xl w-[220px]">{{ item.description }}</div>
    </div>
  </div>
</template>
