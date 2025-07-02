<template>
  <div class="flex flex-col gap-3">
    <NuxtImg :src="item.image" />
    <div class="flex justify-between gap-3">
      <h2 class="text-3xl">{{ item.title }}</h2>
      <div class="space-y-1 bg-secondary text-secondary-foreground py-6 px-5.5 rounded-xl xs:space-y-2 xs:max-w-[300px]">
        <p
          v-for="(spec, i) in item.specs"
          :key="i"
          class="text-xs"
        >
          {{ spec }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    title: string
    image: string
    specs: string[]
  }
}>()
</script>
